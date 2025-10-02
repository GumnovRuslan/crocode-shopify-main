import { StructureBuilder } from 'sanity/structure'

export const langList = (S: StructureBuilder, title: string, name: string) => {
  return (
    S.listItem()
      .title(title)
        .child(
          S.list()
            .title(`${title} by language`)
            .items([
              S.listItem()
                .title('English')
                .child(
                  S.documentList()
                   .title(`English ${title}`)
                   .filter(`_type == "${name}" && language == "en"`)
               ),
             S.listItem()
               .title('Polish')
               .child(
                 S.documentList()
                   .title('Polish Lessons')
                   .filter(`_type == "${name}" && language == "pl"`)
               ),
              S.listItem()
               .title('Other')
               .child(
                 S.documentList()
                   .title(`Other ${title}`)
                   .filter(`_type == "${name}" && (language != "en" && language != "pl")`)
               ),
           ])
       ))
}