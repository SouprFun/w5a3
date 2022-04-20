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

console.log('Adding Eternal Blue by Spiritbox, Published 2021 to collection:', addToCollection( 'Eternal Blue', 'Spiritbox', '2021' ) );
console.log('Adding Verligheten by Soilwork, Published 2019 to collection:', addToCollection( 'Verkligheten', 'Soilwork', '2019' ) );
console.log('Adding War/Peace by Demon Hunter, Published 2019 to collection:', addToCollection( 'War/Peace', 'Demon Hunter', '2019' ) );
console.log('Adding Underworld by Symphony X, Published 2015 to collection:', addToCollection( 'Underworld', 'Symphony X', '2015' ) );
console.log('Adding Helix by Amaranthe, Published 2018 to collection:', addToCollection( 'Helix', 'Amaranthe', '2018' ) );
console.log('Adding Abyss by Unleash the Archers, Published 2020 to collection:', addToCollection( 'Abyss', 'Unlease The Archers', '2020' ) );

console.log(Collection);

function ShowCollection (collection){
    console.log('There are', collection.length, 'albums in the collection.');
    for (i=0; i<collection.length; i++){
        //console.log(collection[i])
        console.log(collection[i].title, 'by', collection[i].artist, 'published in', collection[i].publish)
    }
}
ShowCollection(Collection);
