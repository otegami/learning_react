import Link from "next/link"

const Header = () => {
  const linkStyle = { marginRight: 15, color: "salmon" }

  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/pets">
        <a style={linkStyle}>Pets</a>
      </Link>
    </div>
  )
}

export default Header
