function Footer() {
    return (
        <footer className="page-footer red lighten-1">
          <div className="footer-copyright">
            <div className="container center">
            © {new Date().getFullYear()} Copyright Text
            </div>
          </div>
        </footer>
    )
}

export {Footer}