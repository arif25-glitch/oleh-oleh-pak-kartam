import cloudinary from "@/app/configs/cloudinary";
import { client } from '@/app/configs/database_config';

export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get('gambar') as File;
  const harga = form.get('harga');
  const deskripsi = form.get('deskripsi');
  const kategori = form.get('kategori');
  const nama = form.get('nama');

  const arrayBuffer = await file.arrayBuffer();
  const fileBuffer = Buffer.from(arrayBuffer);

  // sanitized variables
  const sanitizedKategori = kategori && typeof kategori === 'string' ? kategori : 'defaultCollection';
  const sanitizedNama = nama && typeof nama === 'string' ? nama : 'defaultCollection';
  const sanitizedDeskripsi = deskripsi && typeof deskripsi === 'string' ? deskripsi : 'defaultCollection';
  const sanitizedHarga = harga && typeof harga === 'string' ? harga : 'defaultCollection';

  cloudinary.uploader.upload_stream(
    {
      folder: 'images',
      public_id: file.name,
      resource_type: 'auto',
    },
    async (error, result) => {
      if (error) return Object(error);

      try {
        await client.connect();
        const database = client.db('umkmpakkartam');
        const collection = database.collection(sanitizedKategori);
        const dbResult = await collection.insertOne({
          'nama': sanitizedNama,
          'harga': sanitizedHarga,
          'deskripsi': sanitizedDeskripsi,
          'gambar': result?.url,
          'kategori': sanitizedKategori,
        });

        return Response.json({
          'status': 200,
          'insertedID': dbResult.insertedId,
          'message': 'success',
        })
      } catch (err) {
        console.error(err);
      }
    }
  ).end(fileBuffer);

  return Response.json({
    'status': 'successful',

  })
}