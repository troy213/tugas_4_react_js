import React, { Component } from 'react';
import ListMakanan from './../ListData/ListMakanan';

class MenuMakanan extends Component {
  constructor(props){
    super(props);
    this.state = {
      pesan: "",
      jumlah: 0,
      tampil: false
    }
    this.pilihPesanan = this.pilihPesanan.bind(this);
    this.nasipadang = this.nasipadang.bind(this);
    this.sate = this.sate.bind(this);
    this.soto = this.soto.bind(this);
    this.uduk = this.uduk.bind(this);
    this.kuning = this.kuning.bind(this);
    this.batal = this.batal.bind(this);
  }

  pilihPesanan(value,e){
    this.setState({
      [value]: e.target.value,
      tampil: true
    });
  }

  nasipadang(){
    this.setState({
      pesan: "Nasi Padang",
      jumlah: this.state.jumlah + 1,
      tampil: true
    });
  }

  sate(){
    this.setState({
      pesan: "Sate",
      jumlah: this.state.jumlah + 1,
      tampil: true
    });
  }

  soto(){
    this.setState({
      pesan: "Soto Ayam Lamongan",
      jumlah: this.state.jumlah + 1,
      tampil: true
    });
  }

  uduk(){
    this.setState({
      pesan: "Nasi Uduk",
      jumlah: this.state.jumlah + 1,
      tampil: true
    });
  }

  kuning(){
    this.setState({
      pesan: "Nasi Kuning",
      jumlah: this.state.jumlah + 1,
      tampil: true
    });
  }

  batal(){
    this.setState({
      pesan: "",
      jumlah: 0,
      tampil: false
    });
  }

  render(){
    return(
      <div>
        <h3>Daftar Makanan Yang Kami Sediakan :</h3>
        <table>
          <tbody>
            <tr>
              <td>
                <ListMakanan gambar="../../img/nasipadang.jpg" />
                <center>
                  <button onClick={this.nasipadang}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan gambar="../../img/sate.png" />
                <center>
                  <button onClick={this.sate}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan gambar="../../img/sotolamongan.png" />
                <center>
                  <button onClick={this.soto}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan gambar="../../img/nasi kentut.png" />
                <center>
                  <button onClick={this.uduk}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan gambar="../../img/nasi kuning.jpg" />
                <center>
                  <button onClick={this.kuning}>Pesan Sekarang</button>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <input
          type="text"
          placeholder="Masukan Pesanan Anda"
          onChange={e => this.pilihPesanan("pesan",e)}
        />
        <input
          type="number"
          placeholder="Jumlah Pesanan"
          onChange={e => this.pilihPesanan("jumlah",e)}
        />
        <button onClick={this.batal}>Batalkan Semua Pesanan</button>

        {this.state.tampil === true ? (
          <div>
            <h3>Pesanan Anda : {this.state.pesan}</h3>
            <h3>Pesanan Anda : {this.state.jumlah}</h3>
          </div>
        ):(
          <h1>
            <center> Anda Belum Memesan </center>
          </h1>
        )}
      </div>
    );
  }
}

export default MenuMakanan;
