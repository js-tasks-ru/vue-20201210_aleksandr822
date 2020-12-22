import { MeetupView } from './MeetupView.js';
import { MEETUP_ID } from './data.js';

export const MeetupPage = {
  name: 'MeetupPage',
  components: {
    MeetupView
  },
  template: `
    <meetup-view :meetup="meetupItem" />
  `,
  data () {
    return {
      meetupItem: null
    }
  },
  mounted() {
    fetch(`https://course-vue.javascript.ru/api/meetups/${MEETUP_ID}`)
      .then(respons => respons.json())
      .then(json => {
        this.meetupItem = json
      })
  },
};
