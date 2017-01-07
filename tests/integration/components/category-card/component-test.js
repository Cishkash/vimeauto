import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const defaultProperties = {
      uri: "/categories/animation",
      name: "Animation",
      pictures: {
        uri: "/videos/197412946/pictures/610137084",
        sizes: [
          {
            link: "https://i.vimeocdn.com/video/610137084_100x75.jpg?r=pad"
          },
          {
            link: "https://i.vimeocdn.com/video/610137084_200x150.jpg?r=pad"
          },
          {
            link: "https://i.vimeocdn.com/video/610137084_200x150.jpg?r=pad"
          }
        ]
      },
      subcategories: [
        {
          uri: "/categories/animation/subcategories/2d",
          name: "2D",
          link: "https://vimeo.com/categories/animation/2d/videos"
        }
      ],
      id: 0
    }

moduleForComponent('category-card', 'Integration | Component | category card', {
  integration: true,
  beforeEach() {
    this.set('category', defaultProperties);
  }
});

test('it renders', function(assert) {
  this.render(hbs`{{category-card}}`);
  console.log(this.$());

  assert.equal(this.$().text().trim(), '');
});
