const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className=" flex justify-center">
      <div className=" flex flex-col items-center">
        <p className="text-sm font-bold">
          Savannah Informatics Frontend Engineer Assessment
        </p>
        <p className="text-sm">&copy; {year} John Muthua</p>
      </div>
    </div>
  )
}

export default Footer
