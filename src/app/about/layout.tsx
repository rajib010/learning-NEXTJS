
function AboutLayout({children}) {
  return (
    <div className="bg-red-600">
        <h1>News Header</h1>
        {children}
        <h2>News footer</h2>
    </div>
  )
}

export default AboutLayout