import { getMeetupCoverLink } from './data.js'

export const MeetupCover = {
  template: `
    <div class="meetup-cover" :style="meetup.imageId ? { '--bg-url': \`url('\${ meetupBackgroundById }')\` } : '' ">
      <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
  props: {
    link: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    meetup: {
      required: true
    }
  },
  computed: {
    meetupBackgroundById () {
      if (this.meetupItem) {
        return null
      }
      return this.meetup.imageId ? getMeetupCoverLink(this.meetup) : undefined;
    }
  }
};
