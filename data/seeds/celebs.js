
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('celebs').del()
    .then(function () {
      // Inserts seed entries
      return knex('celebs').insert([
        { id: 1, name: 'Tom Hanks', alive: true, image_url: 'http://www.gstatic.com/tv/thumb/persons/62982/62982_v9_bb.jpg' },
        { id: 2, name: 'Tom Hardy', alive: true, image_url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Tom_Hardy_by_Gage_Skidmore.jpg' },
        { id: 3, name: 'Betty White', alive: true, image_url: 'https://cdn.britannica.com/73/163273-050-CB204B32/Betty-White.jpg' },
        { id: 4, name: 'Carrie Fisher', alive: false, image_url: 'https://www.telegraph.co.uk/content/dam/films/2017/12/12/TELEMMGLPICT000084892615_trans_NvBQzQNjv4BqRj9VqCT2ONbdFs0H0gZJqhhpLNNr0NtqQcTw6rvAh5M.jpeg?imwidth=450' },
        { id: 5, name: 'Mel Brooks', alive: true, image_url: 'https://upload.wikimedia.org/wikipedia/commons/9/94/MelBrooksApr10.jpg' },
        { id: 6, name: 'Carl Reiner', alive: true, image_url: 'https://cdn.britannica.com/96/206696-050-8D5D3ABF/Carl-Reiner-2013.jpg' },
        { id: 7, name: 'Michael Jackson', alive: false, image_url: 'https://www.biography.com/.image/t_share/MTE1ODA0OTcxMjkwNTYwMDEz/michael-jackson-pepsi-commercial-raw.jpg' },
        { id: 8, name: 'Kurt Kobain', alive: false, image_url: 'https://www.biography.com/.image/t_share/MTQ2MjIxMzI0NjEwNTc4MDE3/kurt-cobain-wings-mtv-live-1993-photo-jeff-kravitz-getty-images.jpg' },
        { id: 9, name: 'Mel Gibson', alive: true, image_url: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Mel_Gibson_Cannes_2016.jpg' },
        { id: 10, name: 'Alex Trebek', alive: true, image_url: 'http://www.gstatic.com/tv/thumb/persons/1799/1799_v9_ba.jpg' },
        { id: 11, name: 'Regis Philbin', alive: true, image_url: 'http://www.gstatic.com/tv/thumb/persons/1345/1345_v9_ba.jpg' },
        { id: 12, name: 'Robin Williams', alive: false, image_url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Robin_Williams_Happy_Feet_premiere.jpg' },
        { id: 13, name: 'Carrie Underwood', alive: true, image_url: 'https://express-images.franklymedia.com/6616/sites/1446/2019/12/16094841/Carrie-Underwood-AFF.jpg' },
        { id: 14, name: 'Leslie Nielsen', alive: false, image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Leslie_Nielsen.jpg' },
        { id: 15, name: 'Charlie Murphy', alive: false, image_url: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-charlie-murphy-ab117aad-78d3-47ed-984c-456b62d838a1.jpg' },
        { id: 16, name: 'Mitch Hedberg', alive: false, image_url: 'https://www.thoughtco.com/thmb/oRHZ65DV1zma53wXeqBE_EF15FU=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-133182611-5ad794fea9d4f9003d7c0318.jpg' },
        { id: 17, name: 'Patrice Oneal', alive: false, image_url: 'https://m.media-amazon.com/images/M/MV5BMTQzMjg4OTA4NF5BMl5BanBnXkFtZTcwMjcxMzAxNw@@._V1_.jpg' },
        { id: 18, name: 'Elizabeth Banks', alive: true, image_url: 'https://m.media-amazon.com/images/M/MV5BMjEzMTcxNDU3NV5BMl5BanBnXkFtZTcwOTE0MzEzNw@@._V1_.jpg' },
        { id: 19, name: 'Jennifer Lawrence', alive: true, image_url: 'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg' },
        { id: 20, name: 'George Clooney', alive: true, image_url: 'https://content.fortune.com/wp-content/uploads/2018/08/george-clooney-net-worth-tequila.jpg' },
        { id: 21, name: 'Julia Roberts', alive: true, image_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Julia_Roberts_2011_Shankbone_3.JPG' },
        { id: 22, name: 'Kirk Douglas', alive: true, image_url: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/NINTCHDBPICT000287657525.jpg' },
        { id: 23, name: 'Bob Barker', alive: true, image_url: 'https://mk0movieguide99l7786.kinstacdn.com/wp-content/uploads/2018/10/bob-barker.jpg' },
        { id: 24, name: 'Larry King', alive: true, image_url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Larry_King_by_Gage_Skidmore_2.jpg' },
        { id: 2, name: 'James Dean', alive: false, image_url: 'https://www.indiewire.com/wp-content/uploads/2019/11/unnamed-1.jpg?w=780' },
        { id: 26, name: 'Arnold Schwarzenegger', alive: true, image_url: 'https://biographics.org/wp-content/uploads/2017/11/Arnold-Schwarzenegger.jpg' },
        { id: 27, name: 'Sean Connery', alive: true, image_url: 'https://img2.looper.com/img/gallery/why-you-dont-hear-from-sean-connery-anymore/he-retired-in-2003-1553185700.jpg' },
        { id: 28, name: 'John Cleese', alive: true, image_url: 'https://www.onthisday.com/images/people/john-cleese-medium.jpg' },
        { id: 29, name: 'Selena', alive: false, image_url: 'https://img1.nickiswift.com/img/gallery/the-untold-truth-of-selena-quintanillas-murder/intro-1498469853.jpg' },
        { id: 30, name: 'Jennifer Lopez', alive: true, image_url: 'https://m.media-amazon.com/images/M/MV5BMTY0OTY3ODA3OV5BMl5BanBnXkFtZTcwMzMyMzQ1NQ@@._V1_.jpg' },
        { id: 31, name: 'Eminem', alive: true, image_url: 'https://pbs.twimg.com/profile_images/929030268043845633/ilS1ri2v.jpg' },
        { id: 32, name: 'Jim Carrey', alive: true, image_url: 'https://m.media-amazon.com/images/M/MV5BMTQwMjAwNzI0M15BMl5BanBnXkFtZTcwOTY1MTMyOQ@@._V1_.jpg' },
        { id: 33, name: 'Tom Cruise', alive: true, image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg' },
        { id: 34, name: 'Leonardo DiCaprio', alive: true, image_url: 'http://d17zbv0kd7tyek.cloudfront.net/wp-content/uploads/2015/06/leonardo-dicaprio-fb.jpg' },
        { id: 35, name: 'Juliette Binoche', alive: true, image_url: 'https://businessmirror.com.ph/wp-content/uploads/2019/11/1000.jpg' },
        { id: 36, name: 'Heath Ledger', alive: false, image_url: 'https://www.biography.com/.image/t_share/MTE5NTU2MzE2MDQ4NjIzMTE1/heath-ledger-266035-1-402.jpg' },
        { id: 37, name: 'Jack Nicholson', alive: true, image_url: 'https://www.biography.com/.image/t_share/MTE4MDAzNDEwNjQyMzcyMTEw/jack-nicholson-9423081-1-402.jpg' },
        { id: 38, name: 'Marlon Brando', alive: false, image_url: 'https://m.media-amazon.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_.jpg' },
        { id: 39, name: 'Christopher Reeve', alive: false, image_url: 'https://s3.amazonaws.com/reeve-assets-production/ChristopherReeve570x280.jpg' },
        { id: 40, name: 'Ben Affleck', alive: true, image_url: 'https://irp-cdn.multiscreensite.com/ce0ec9f3/dms3rep/multi/mobile/Ben+Affleck+-+Website.jpg' },
        { id: 41, name: 'Prince', alive: false, image_url: 'http://stmedia.stimg.co/Prince_album-1556261983909_large.jpeg?w=800' },
        { id: 42, name: 'Amy Winehouse', alive: false, image_url: 'https://www.rollingstone.com/wp-content/uploads/2019/02/amy-winehouse-hologram.jpg?resize=900,600&w=450' },
        { id: 43, name: 'David Bowie', alive: false, image_url: 'https://www.nme.com/wp-content/uploads/2016/09/2016_DAVIDBOWIE_LIFEINPIX_1972_Sukita_Ziggy_110116-2-696x462.jpg' },
        { id: 44, name: 'Chris Cornell', alive: false, image_url: 'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/11/chris_cornell.jpg' },
        { id: 45, name: 'Bill Paxton', alive: false, image_url: 'https://www.biography.com/.image/t_share/MTE4MDAzNDEwODQwMzU2MzY2/bill-paxton-20825057-1-402.jpg' },
        { id: 46, name: 'Tom Petty', alive: false, image_url: 'http://www.gstatic.com/tv/thumb/persons/70697/70697_v9_ba.jpg' },
        { id: 47, name: 'Bob Dylan', alive: true, image_url: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-240736-GettyImages-91150536.jpg' },
        { id: 48, name: 'Joan Rivers', alive: false, image_url: 'https://image.businessinsider.com/53ff42c669bedd830d6b0831?width=1100&format=jpeg&auto=webp' },
        { id: 49, name: 'Matt Damon', alive: true, image_url: 'https://moneyinc.com/wp-content/uploads/2018/12/matt-damon-2-750x422.jpg' },
        { id: 50, name: 'Emo Phillips', alive: true, image_url: 'https://pbs.twimg.com/profile_images/1131530931414622208/yxYtMhy__400x400.jpg' }

      ]);
    });
};
