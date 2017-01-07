import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const defaultProperties = [{
  name: "Some rad title",
  pictures: {
    sizes: [
      {
        link: "https://i.vimeocdn.com/video/611324638_100x75.jpg?r=pad"
      },
      {
        link: "https://i.vimeocdn.com/video/611324638_200x150.jpg?r=pad"
      },
      {
        link: "https://i.vimeocdn.com/video/611324638_295x166.jpg?r=pad"
      },
      {
        link: "https://i.vimeocdn.com/video/611324638_640x360.jpg?r=pad"
      },
      {
        link: "https://i.vimeocdn.com/video/611324638_960x540.jpg?r=pad"
      }
    ]
  },
  user: {
    name: "Some cool guy",
    location: "Washington, DC",
    websites: [
      {
        link: "some.cool.website"
      }
    ]
  },
  id: 0
}];

moduleForComponent('trending-carousel', 'Integration | Component | trending carousel', {
  integration: true,
  beforeEach() {
    this.set('trendings', defaultProperties);
  }
});

test('Data test renders', function(assert) {
  this.render(hbs`{{trending-carousel trendings=trendings}}`);

  assert.ok(
    this.$('[data-test="trending-title-0"]').text().includes(defaultProperties[0].name),
    'Carousel title renders');

  assert.ok(
    this.$('[data-test="trending-user-0"]').text().includes(defaultProperties[0].user.name),
    'Carousel user name renders');

  assert.ok(
    this.$('[data-test="trending-location-0"]').text().includes(defaultProperties[0].user.location),
    'Carousel user location renders');

  assert.ok(
    this.$('[data-test="trending-0-website-0"]').text().includes(defaultProperties[0].user.websites[0].link),
    'Carousel websites render');
});
