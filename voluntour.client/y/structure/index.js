import {CalendarIcon, UsersIcon, PinIcon, ProjectsIcon, EarthGlobeIcon} from '@sanity/icons'

const structure = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem()
        .title('Upcoming Projects')
        .schemaType('project')
        .icon(EarthGlobeIcon)
        .child(S.documentList().title('Upcoming Projects').filter('endDate > now()')),
      S.listItem()
        .title('Past Projects')
        .schemaType('project')
        .icon(EarthGlobeIcon)
        .child(S.documentList().title('Past Projects').filter('endDate < now()')),
      S.listItem()
        .title('Current Projects')
        .schemaType('project')
        .icon(EarthGlobeIcon)
        .child(S.documentList().title('Current Projects').filter('endDate < now() && startDate > now()')),
      S.divider(),
      S.documentTypeListItem('artist').title('Artists').icon(UsersIcon),
      S.documentTypeListItem('venue').title('Venues').icon(PinIcon),
    ]);

export default structure;
