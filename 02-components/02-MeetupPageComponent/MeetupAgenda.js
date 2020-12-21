import { MeetupAgendaItem } from './MeetupAgendaItem.js';

export const MeetupAgenda = {
  name: 'MeetupAgenda',
  template: `
    <div class="meetup-agenda">
      <meetup-agenda-item
        v-for="items in agenda"
        :key="items.id"
        :agendaItem="items"
      />
    </div>`
  ,
  props: {
    agenda: {
      type: Array,
      required: true
    }
  },
  components: {
    MeetupAgendaItem
  }
};
