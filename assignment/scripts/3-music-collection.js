console.log('***** Music Collection *****')
let Collection = [];

function addToCollection(Title, Artist, YearPub){
    let album = {
        title: Title,
        artist: Artist,
        publish: YearPub
    };
    Collection.push(album) 
    return album
}

addToCollection( 'Eternal Blue', 'Spiritbox', '2021' );
addToCollection( 'Verkligheten', 'Soilwork', '2019' );
addToCollection( 'War/Peace', 'Demon Hunter', '2019' );
addToCollection( 'Underworld', 'Symphony X', '2015' );
addToCollection( 'Helix', 'Amaranthe', '2018' );
addToCollection( 'Abyss', 'Unlease The Archers', '2020' );

console.log(Collection);