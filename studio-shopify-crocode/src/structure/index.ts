// structure.ts
import { StructureResolver } from 'sanity/structure'
import { langList } from './templates/langList'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      langList(S, 'Blogs', 'blogs'),
      langList(S, 'Projects', 'projects'),

      // остальные типы документов (убираем дефолтный список lesson)
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'blogs' && item.getId() !== 'projects'),
    ])