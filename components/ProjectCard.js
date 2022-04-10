import ProjectModal from './ProjectModal'

export default function ProjectCard({
  id,
  title,
  description,
  shortDescription,
  image,
  altText,
}) {
  return (
    <div id={id} className="mb-6 w-full px-3 lg:w-1/4 flex">
      <div className="overflow-hidden rounded shadow w-full">
        {image? (
          <img
          className="rounded-t h-64 w-full object-cover"
          src={image ? image : null}
          alt={altText}
        ></img>
        ) : (
          <div className="rounded-t h-64 w-full bg-gradient-to-r from-[#99f6e4] to-[#d9f99d]"></div>
        )}
        
        <div className="rounded-b bg-white p-6 h-full flex flex-col">
          <h2 className="my-2 text-1xl font-bold">{title}</h2>
          <p>{shortDescription}</p>
          <ProjectModal
          id={id}
          title={title}
          description={description}
          image={image}
          altText={altText}
           />
        </div>
      </div>
    </div>
  )
}
