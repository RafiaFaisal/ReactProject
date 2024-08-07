import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
    position: 'relative', 
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    color: '#666',
    marginTop: 5,
  },
  price: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#B2AC88',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    right: -12,
    bottom: -12,
    minWidth: 80, // Ensures the button has enough width for the text
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 35, // Ensures space for the button
  },
  iconText: {
    marginLeft: 5,
    marginRight: 15,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  flatListContentContainer: {
    paddingBottom: 20, // Ensures padding at the bottom for scrolling
  },
});

export default styles;
