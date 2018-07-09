import _ from 'lodash'
import readingTime from 'reading-time'

export const utils = {
  methods: {
    getPlainText: function (content) {
      var tmp = document.createElement('div')
      tmp.innerHTML = content
      return tmp.textContent || tmp.innerText || ''
    },
    truncatePost: function (content, length, separator) {
      var text = this.getPlainText(content)
      return _.truncate(text, {
        'length': length,
        'separator': separator
      })
    },
    findImage: function (post, index) {
      // eslint-disable-next-line
      var url = /<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/.exec(post.content)
      this.setCover({index: index, url: url})
      return url
    },
    parseDate: function (date) {
      var parsedDate = new Date(date)
      return {month: this.months[parsedDate.getMonth()], day: parsedDate.getDate(), year: parsedDate.getFullYear()}
    },
    readingTime: function (content) {
      var text = this.getPlainText(content)
      return readingTime(text)
    },
    generateSlug: function (post) {
      var l = document.createElement('a')
      l.href = post.id + '/' + _.last(post.url.split('/')).replace(/.html/, '')
      return l.pathname
    },
    randomPosts: function (qty) {
      if (!this.posts) {
        this.getPosts()
      }
      return _.sampleSize(this.posts, qty)
    }
  }
}
