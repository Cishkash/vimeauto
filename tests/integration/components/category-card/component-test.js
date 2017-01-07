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
    };

moduleForComponent('category-card', 'Integration | Component | category card', {
  integration: true,
  beforeEach() {
    this.set('category', defaultProperties);
  }
});

test('Data rendering tests', function(assert) {
  this.render(hbs`{{category-card category=category}}`);

  assert.ok(this.$('[data-test="card-category-image"]').attr('src').includes(defaultProperties.pictures.sizes[2].link), 'Renders the correct src link for the card-category-image');
  assert.ok(this.$('[data-test="card-category-title"]').text().includes(defaultProperties.name), 'Renders the correct text inside card-category-title');
  assert.ok(this.$('[data-test="card-category-subcategory"]').text().includes(defaultProperties.subcategories[0].name), 'Renders the correct text inside card-category-subcategory');
});
