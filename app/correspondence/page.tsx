const CorrespondencePage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Correspondence</h1>
      <p className="mb-4">Here you can find ways to connect with me.</p>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
        <p>Email: michael.cavopol@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Download vCard</h2>
        <a
          href="/vcard"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          download="michael-cavopol.vcf"
        >
          Download vCard
        </a>
      </div>
    </div>
  )
}

export default CorrespondencePage
