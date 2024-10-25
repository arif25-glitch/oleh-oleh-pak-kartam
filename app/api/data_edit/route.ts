import { client } from "@/app/configs/database_config";
import cloudinary from "@/app/configs/cloudinary";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('gambar');
    const harga = formData.get('harga');
    const deskripsi = formData.get('deskripsi');
    const kategori = formData.get('kategori');
    const nama = formData.get('nama');
    const _id = formData.get('_id');

    // input sanitization
    const sanitizedKategori = kategori && typeof kategori === 'string' ? kategori : 'defaultCollection';
    const sanitizedNama = nama && typeof nama === 'string' ? nama : 'defaultCollection';
    const sanitizedDeskripsi = deskripsi && typeof deskripsi === 'string' ? deskripsi : 'defaultCollection';
    const sanitizedHarga = harga && typeof harga === 'string' ? harga : 'defaultCollection';
    const sanitized_id = _id && typeof _id === 'string' ? _id : 'defaultCollection';

    if (file === 'no_image') {
      const newData = {
        'nama': sanitizedNama,
        'deskripsi': sanitizedDeskripsi,
        'harga': sanitizedHarga,
        'kategori': sanitizedKategori,
      };

      try {
        await client.connect();

        const database = client.db('umkmpakkartam');
        const collection = database.collection(sanitizedKategori);

        const result = await collection.updateOne({ _id: new ObjectId(sanitized_id) }, { $set: newData });

        return Response.json({
          'status': 200,
          'insertedID': result.upsertedId,
          'message': 'success',
        });
      } catch (err) {
        console.error(err);
      } finally {
        await client.close();
      }
    } else {
      const file = formData.get('gambar') as File;

      const arrayBuffer = await file.arrayBuffer();
      const fileBuffer = Buffer.from(arrayBuffer);

      cloudinary.uploader.upload_stream(
        {
          folder: 'images',
          public_id: file.name,
          resource_type: 'auto',
        },
        async (error, result) => {
          if (error) return Object(error);
          try {
            const newData = {
              'nama': sanitizedNama,
              'deskripsi': sanitizedDeskripsi,
              'harga': sanitizedHarga,
              'kategori': sanitizedKategori,
              'gambar': result?.url,
            };

            await client.connect();

            const database = client.db('umkmpakkartam');
            const collection = database.collection(sanitizedKategori);

            const dbResult = await collection.updateOne({ _id: new ObjectId(sanitized_id) }, { $set: newData });

            return Response.json({
              'status': 200,
              'insertedID': dbResult.upsertedId,
              'message': 'success',
            });
          } catch (err) {
            console.error(err);
          } finally {
            client.close();
          }
        }
      ).end(fileBuffer);
    }
    return Response.json({
      'message': 'success',
    });
  } catch (err) {
    console.error(err)
    return Response.json({
      'error': 'api only accept form-data',
    })
  } finally {
    return Response.json({
      'status': 'success',
      'message': 'api succesful accessed',
    });
  }
}