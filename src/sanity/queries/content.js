export const SITE_CONTENT_QUERY = `{
  "siteSettings": *[_type == "siteSettings"][0]{
    "navigation": {
      "logo": {"src": logo.asset->url, "alt": logoAlt},
      "links": navigationLinks[]{label, path},
      "cta": {"buttonText": navigationCta}
    },
    "footer": {
      description,
      mapUrl,
      mapLabel,
      featuredCourses,
      "contact": contact,
      socialLinks,
      copyrightEntity,
      "logo": {"src": footerLogo.asset->url, "alt": footerLogoAlt}
    },
    "seo": {"title": seo.title, "description": seo.description, "image": seo.image.asset->url}
  },
  "homePage": *[_type == "homePage"][0]{
    "hero": {
      "badge": hero.badge,
      "heading": hero.heading,
      "description": hero.description,
      "buttons": hero.buttons,
      "stats": hero.stats,
      "floatingCards": hero.floatingCards,
      "images": {"hero": {"src": hero.image.asset->url, "alt": hero.imageAlt}}
    },
    "trustedCompanies": {
      "title": trustedCompanies.title,
      "logos": trustedCompanies.logos[]{"id": legacyId, name, "imagePath": logo.asset->url}
    },
    "corporateTraining": {
      "title": corporateTraining.title,
      "description1": corporateTraining.description1,
      "description2": corporateTraining.description2,
      "buttonText": corporateTraining.buttonText,
      "buttonUrl": corporateTraining.buttonUrl,
      "imageUrl": corporateTraining.image.asset->url,
      "image": corporateTraining.image,
      "imageAlt": corporateTraining.imageAlt
    },
    coursesSection,
    statistics,
    whyChoose,
    "story": {
      "imageSrc": story.image.asset->url,
      "imageAlt": story.imageAlt,
      "title": story.title,
      "mission": story.mission,
      "vision": story.vision,
      "paragraphs": story.paragraphs,
      "Founded": story.foundedLabel,
      "FoundedIn": story.foundedLocation,
      "foundedYear": story.foundedYear
    },
    featureHighlights,
    faq,
    "cta": {
      "title": cta.title,
      "description": cta.description,
      "buttonText": cta.buttonText,
      "imageUrl": cta.image.asset->url
    },
    "offerModal": {
      "image": offerModal.image.asset->url
    }
  },
  "coursesPage": *[_type == "coursesPage"][0]{badge, title, description},
  "courses": *[_type == "course" && defined(title) && length(title) > 0]
    | order(order asc, legacyId asc, _createdAt asc){
      "id": coalesce(legacyId, _id),
      title,
      duration,
      mode,
      category,
      level,
      description,
      detailDescription,
      learnTitle,
      learn[]{title, description},
      "image": image.asset->url,
      "syllabusUrl": syllabusFile.asset->url,
      "sanityId": _id
    },
  "aboutPage": *[_type == "aboutPage"][0]{
    "hero": {
      "badge": hero.badge,
      "title": hero.title,
      "description": hero.description,
      "cards": hero.cards[]{"src": image.asset->url, alt, label}
    },
    visionMission,
    "whyChoose": {
      "title1": whyChoose.titleLine1,
      "title2": whyChoose.titleLine2,
      "description": whyChoose.description,
      "benefits": whyChoose.benefits,
      "image": whyChoose.image.asset->url,
      "imageAlt": whyChoose.imageAlt,
      "buttonText": whyChoose.buttonText
    }
  },
  "teamPage": *[_type == "teamPage"][0]{
    badge,
    title1,
    title2,
    "teamImages": teamImages[]{"src": image.asset->url, alt},
    "founder": {"name": founder.name, "role": founder.role, "image": founder.image.asset->url, "description": founder.description, "linkedin": founder.linkedin},
    mentorsHeading,
    valuesHeading,
    values
  },
  "trainers": *[_type == "trainer" && defined(name) && length(name) > 0] | order(order asc){
    "id": coalesce(legacyId, _id),
    name,
    "title": role,
    "image": image.asset->url,
    linkedinUrl,
    bio
  },
  "testimonialsPage": *[_type == "testimonialsPage"][0]{hero, comparison},
  "alumniTestimonials": *[
    (_type == "alumniTestimonial" || (_type == "testimonial" && kind == "alumni")) &&
    defined(name) && length(name) > 0
  ] | order(_createdAt asc){
    "id": coalesce(legacyId, _id), name, role, "image": image.asset->url, rating, "testimonial": quote
  },
  "videoTestimonials": *[
    _type == "videoTestimonial" && defined(name) && length(name) > 0
  ] | order(_createdAt asc){
    "id": coalesce(legacyId, _id),
    name,
    role,
    "image": {
      "url": image.asset->url,
      "asset": {"_ref": image.asset._ref}
    },
    videoUrl
  },
  "placementStories": *[
    (_type == "placementSuccessStory" || (_type == "testimonial" && kind == "placement")) &&
    defined(name) && length(name) > 0
  ] | order(_createdAt asc){
    "id": coalesce(legacyId, _id),
    "studentName": name,
    "studentRole": role,
    "studentImage": image.asset->url,
    "homeImage": coalesce(homeImage.asset->url, image.asset->url),
    "companyLogo": coalesce(companyLogo.asset->url, logo.asset->url),
    salary,
    company
  },
  "faqs": *[_type == "faq" && defined(question) && length(question) > 0] | order(order asc){
    "id": coalesce(legacyId, _id), question, answer
  },
  "contactPage": *[_type == "contactPage"][0]{
    hero,
    "contactCard": {"image": contactCard.image.asset->url, "address": contactCard.address, "email": contactCard.email, "phone": contactCard.phone},
    mapUrl
  },
  "galleryPage": *[_type == "galleryPage"][0]{
    hero,
    categories,
    "items": items[]{
      "id": _key,
      category,
      "img": image.asset->url,
      alt
    },
    cta
  },
  "careersPage": *[_type == "careersPage"][0]{
    hero,
    jobsSection,
    "valuesSection": {
      "title": valuesSection.title,
      "subtitle": valuesSection.subtitle,
      "items": valuesSection.items[]{"id": _key, title, description}
    },
    cta,
    "seo": {
      "title": seo.title,
      "description": seo.description,
      "image": seo.image.asset->url
    }
  },
  "careerJobs": *[
    _type == "jobOpening" && defined(title) && length(title) > 0
  ] | order(order asc, datePosted desc, _createdAt asc){
    "id": _id,
    title,
    company,
    description,
    highlights,
    "slug": slug.current,
    datePosted,
    validThrough,
    employmentType
  }
}`;
