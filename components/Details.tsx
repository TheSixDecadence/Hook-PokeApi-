import useFetchOneData from '@/hooks/useFetchPokemon';
import { StyleSheet, Text, Image, ActivityIndicator, View } from 'react-native';
import { useEffect } from 'react';

export function Details({ navigation, route }) {

    function handleClick() {
      navigation.navigate('Home');
    }

    const { pokemon, loading, error } = useFetchOneData(route.params.name);

    useEffect(() => {
      console.log(pokemon, loading, error?.message);
    }, [loading]);

    if (loading) {
      return <ActivityIndicator style={styles.loading} />;
    }

    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <Text style={styles.textName}>NAME: {pokemon.name}</Text>
          <Text style={styles.text}># Pokedex: {pokemon.id}</Text>
          <Image
            source={{ uri: pokemon.sprites.front_default }}
            style={styles.image}
          />
          <Text style={styles.textInfo}>Height: {pokemon.height}</Text>
          <Text style={styles.textInfo}>Weight: {pokemon.weight}</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4B538',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    height: '100%'
  },
  background: {
    backgroundColor: '#F43838',
    width: 'auto',
    height: 'auto',
    alignSelf: 'center',
    top: 85,
    borderWidth: 10,
    borderColor: '#69665E',
  },
  textName: {
    fontSize: 25,
    lineHeight: 24,
    marginTop: 10,
    color: 'black',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
    marginTop: 10,
    color: 'black',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInfo:{
    fontSize: 18,
    lineHeight: 25,
    marginTop: 10,
    color: 'black',
    fontFamily: 'Courier New',
    fontWeight: 'semibold',
    alignSelf: 'center',
    marginBottom: 10
  }
});
