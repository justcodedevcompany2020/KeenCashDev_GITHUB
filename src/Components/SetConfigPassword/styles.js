import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  password_continer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:"center",
  },
  input: {
    borderWidth: 1,
    borderColor: '#4DFF7E',
    borderRadius: 1000,
    width: 22,
    height: 19,
    marginHorizontal: 10,
  },
  opt: {
    width: 250,
    height: 88,
    borderRadius: 13,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
  },
  touchableOpacity: {
    height: 44,
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    fontFamily:'Lexend-Light',
    color: '#000',
    marginHorizontal: 10,
  },
  root: {padding: 20, minHeight: 300},
  title: {textAlign: 'center', fontSize: 30},
  fieldRow: {
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: 8,
  },
  cell: {
    width: 20,
    height: 20,
    lineHeight: 55,
    fontSize: 30,
    fontFamily:'Lexend-Bold',
    textAlign: 'center',
    marginLeft: 20,
    borderRadius: 1000,
    borderWidth:2,
    borderColor:'#4DFF7E',
  },
  toggle: {
    width: 55,
    height: 55,
    lineHeight: 55,
    fontSize: 24,
    textAlign: 'center',
  },
  focusCell: {
    backgroundColor: '#4DFF7E',
    borderWidth:0
  },
});
