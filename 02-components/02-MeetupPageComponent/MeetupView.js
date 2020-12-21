import { MeetupCover } from './MeetupCover.js';
import { MeetupDescription } from './MeetupDescription.js';
import { MeetupInfo } from './MeetupInfo.js';
import { MeetupAgenda } from './MeetupAgenda.js';
import { getMeetupCoverLink } from './data.js'

export const MeetupView = {
  name: 'MeetupView',
  template: `
  <div v-if="meetup">
    <meetup-cover
      :link="meetupBackgroundById"
      :title="meetup.title"
      :meetup="meetup"
    />
    <div class="container">
      <div class="meetup">
        <div class="meetup__content">
          <h3>Описание</h3>
          <meetup-description :description="meetup.description" />
          <h3>Программа</h3>
          <meetup-agenda :agenda="meetup.agenda"></meetup-agenda>
        </div>

        <div class="meetup__aside">
          <meetup-info
            :organizer="meetup.organizer"
            :place="meetup.place"
            :date="new Date(meetup.date)"
          />
        </div>
      </div>
    </div>
  </div>
  `,
  props: {
    meetup: {
      type: Object,
      required: true
    }
  },
  components: {
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
    MeetupAgenda
  },
  computed: {
    meetupBackgroundById () {
      if (!this.meetup) {
        return null
      }
      return this.meetup.imageId ? getMeetupCoverLink(this.meetup) : undefined;
    }
  }
};
