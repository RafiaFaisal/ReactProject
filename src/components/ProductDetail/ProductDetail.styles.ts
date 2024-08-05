import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    marginLeft: 5,
    fontSize: 20,
    color: 'black',
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default styles;
