import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

let defaultProperties = {
  model: {
    created_date: "2016-01-01",
    created_time: "Some time",
    description: "Some cool description",
    link: "Some cool link",
    name: "Ribbeth\'s Pandarium",
    user: {
      name: "Ribbeth",
      pictures: {
        sizes:[
          {
            link: 'link 1'
          }, {
            link: 'link 2'
          }, {
            link: 'link 3'
          }
        ]
      }
    },
    websites: [
      {
        link: "vimeauto.com"
      }
    ]
  }
};

moduleForComponent('video-descriptor', 'Integration | Component | video descriptor', {
  integration: true,
  beforeEach() {
    this.setProperties(defaultProperties);
  }
});

test('it renders', function(assert) {
  this.render(hbs`{{video-descriptor model=model}}`);

  assert.ok(this.$('[data-test="video-user-image"]').attr('src').includes(defaultProperties.model.user.pictures.sizes[2].link),
            'Image src is populated with model picture link');
  assert.ok(this.$('[data-test="video-title"]').text().includes(defaultProperties.model.name),
            'Video name data renders');
  assert.ok(this.$('[data-test="video-user-name"]').text().includes(defaultProperties.model.user.name),
            'Video user name renders');
  assert.ok(this.$('[data-test="video-created"]').text().includes('01-01-2016 at Some time'),
            'Proper date renders (with help from the template moment helper)');
  assert.ok(this.$('[data-test="video-description"]').text().includes(defaultProperties.model.description),
            'Video description renders');
});
