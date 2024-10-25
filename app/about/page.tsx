export default function About() {
  return (
    <div className="container-fluid bg-white p-0">
      {/* <!-- Spinner Start --> */}
      <div id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* <!-- Spinner End --> */}

      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <a href="" className="navbar-brand pt-3 pb-3" >
            <div className="d-flex">
              <h1 className="text-primary m-0">
                <i className="fa fa-utensils me-3"></i>
              </h1>
              <h1 className="text-primary m-0">Oleh-Oleh <br></br>Pak Kartam</h1>
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
              <a href="/" className="nav-item nav-link">Home</a>
              <a href="/about" className="nav-item nav-link active">About</a>
              <a href="index.html" className="nav-item nav-link">Menu</a>
              <a href="https://wa.me/+6282182897993" className="nav-item nav-link">Kontak</a>
              <a href="/admin_login" className="nav-item nav-link">Admin</a>
            </div>
            <a href="https://gofood.co.id/bandar-lampung/restaurant/dapur-kelinci-tirtayasa-28173952-6f98-4a60-87c1-74564d4f83b9"
              className="btn btn-primary py-2 px-4">Pesan Sekarang</a>
          </div>
        </nav>

        <div className="container-fluid py-5 bg-dark hero-header mb-5">
          <div className="container my-5 py-5">
            <div className="row align-items-center">
              <div className="col-lg-12 text-center text-lg-start">
                <h1 className="display-3 text-white animated slideInLeft mb-5 text-center mt-5">Tentang Kami</h1>
                <p className="text-white animated slideInLeft mb-4 pb-2 mt-5 py-5 me-5 ms-5 pb-5 text-center" style={{ fontSize: "24px", fontFamily: 'cursive' }}>
                Toko Oleh-Oleh &quot;Pak Kartam&quot; adalah pusat oleh-oleh khas Kabupaten 
                Tulang Bawang Barat yang menyediakan produk unggulan dari berbagai UMKM lokal. 
                Berdiri dengan visi menjadi pusat oleh-oleh terbesar di daerah, 
                Toko Pak Kartam menawarkan beragam produk makanan dan minuman berkualitas tinggi, 
                seperti kopi bubuk, lada, ketumbar, serta berbagai bumbu basah dan kering.
                Berkembang dari usaha keluarga, Toko Pak Kartam juga memiliki misi meningkatkan 
                kesejahteraan masyarakat sekitar melalui kolaborasi dengan UMKM lokal, 
                menyediakan lapangan kerja, dan mendukung ekonomi daerah. Toko ini menjual 
                produk-produk yang diproses secara tradisional tanpa bahan pengawet, 
                menjamin kualitas dan keaslian rasa.
                Dengan beragam pilihan produk, harga terjangkau, 
                dan proses distribusi yang mencakup pembelian langsung dan online, 
                Toko Pak Kartam menjadi pilihan tepat bagi siapa pun yang ingin 
                menikmati oleh-oleh berkualitas khas Tulang Bawang Barat atau 
                mendukung produk lokal Lampung.
                  
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}