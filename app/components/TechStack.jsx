const techData = {
  current: ['C#', '.NET', 'JavaScript', 'Angular', 'Azure'],
  learning: ['Unity', 'Python', 'Generative AI', 'RAG Systems']
}

const TechStack = () => {
  return (
    <div className='py-10'>
      <h4 className='mb-2 text-lg font-ovo'>My Tech Stack</h4>

      <div className='flex flex-col lg:flex-row gap-10 mt-6'>
        
        {/* What I Work With */}
        <div className='flex-1'>
          <h3 className='text-xl font-ovo font-semibold mb-4'>What I Work With</h3>
          <div className='flex flex-wrap gap-3'>
            {techData.current.map((tech, index) => (
              <span key={index} className='px-4 py-2 border border-gray-300 rounded-full text-sm font-ovo'>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* What I'm Learning Next */}
        <div className='flex-1'>
          <h3 className='text-xl font-ovo font-semibold mb-4'>What I'm Learning Next</h3>
          <div className='flex flex-wrap gap-3'>
            {techData.learning.map((tech, index) => (
              <span key={index} className='px-4 py-2 border border-gray-300 rounded-full text-sm font-ovo'>
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default TechStack