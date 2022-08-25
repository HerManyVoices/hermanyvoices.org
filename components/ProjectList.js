import ProjectCard from './ProjectCard'
import { projects } from '../public/data/projects.js'

export default function ProjectList() {
  const displayEnvironmentProjects = projects.map((project) =>
    project.environmentProjects.map(
      ({ id, title, description, shortDescription, image, altText }) => (
        <>
          <ProjectCard
            key={id}
            title={title}
            shortDescription={shortDescription}
            description={description}
            image={image}
            altText={altText}
          />
        </>
      )
    )
  )

  const displayCommunityProjects = projects.map((project) =>
    project.communityProjects.map(
      ({ id, title, description, shortDescription, image, altText }) => (
        <>
          <ProjectCard
            key={id}
            title={title}
            shortDescription={shortDescription}
            description={description}
            image={image}
            altText={altText}
          />
        </>
      )
    )
  )

  const displayCultureProjects = projects.map((project) =>
    project.cultureProjects.map(
      ({ id, title, description, shortDescription, image, altText }) => (
        <>
          <ProjectCard
            key={id}
            title={title}
            shortDescription={shortDescription}
            description={description}
            image={image}
            altText={altText}
          />
        </>
      )
    )
  )

  return (
    <section>
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-4 max-w-xl text-center lg:mb-16">
            <h3
              id="environmental-projects"
              className="font-heading text-4xl font-bold lg:text-4xl"
            >
              Environment
            </h3>
            <p className='text-lg md:w-128 md:m-auto'>
              We invest in innovative technologies that draw on traditional
              practices to serve the needs of Mother Earth. We are currently
              working with communities in the US and globally to develop skills
              and access to technology.
            </p>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="flex w-full flex-wrap place-content-center">
              {displayEnvironmentProjects}
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-4 max-w-xl text-center lg:mb-16">
            <h3
              id="community-projects"
              className="font-heading text-4xl font-bold lg:text-4xl"
            >
              Community
            </h3>
            <p className='text-lg md:w-128 md:m-auto'>
              Do with, not for. The communities that we serve participate in the
              solutions that we champion. We listen to community leaders and
              individuals about their goals and needs and then bring resources,
              tools and our partners to support their efforts.
            </p>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="flex w-full flex-wrap place-content-center">
              {displayCommunityProjects}
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-4 max-w-xl text-center lg:mb-16">
            <h3
              id="cultural-projects"
              className="font-heading text-4xl font-bold lg:text-4xl"
            >
              Culture
            </h3>
            <p className='text-lg md:w-128 md:m-auto'>
              We center Indigenous voices, knowledge and wisdom. We are
              committed to the values of cultural appreciation and cultural
              exchange. We appreciate and value the diversity of cultural
              experiences that exist and prioritize the importance of cultural
              exchange. Through listening and learning together we can build a
              stronger, more inclusive earth family.
            </p>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="flex w-full flex-wrap place-content-center">
              {displayCultureProjects}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
