import '../styles/test.css'
function Gallery() {

    return (
      <div className="Gallery">
        <section>
            <h2>Gallery</h2>
            <ul className="list">
                <li><img  width={200} src="../../public/assets/paris.jpg" alt="" /></li>
                <li><img  width={200} src="../../public/assets/paris.jpg" alt="" /></li>
                <li><img  width={200} src="../../public/assets/paris.jpg" alt="" /></li>
            </ul>
        </section>
      </div>
    )
  }
  
  export default Gallery