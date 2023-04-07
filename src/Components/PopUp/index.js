import {View, Text, Modal} from 'react-native';
import {Button} from '../Button.js';
import {styles} from './styles';

export const PopUp = ({
  title,
  text,
  button_text,
  text_2,
  onPress,
  onPress1,
  open,
}) => {
  console.log(open,'open')
  return (

    <Modal visible={open} transparent={true} animationType="slide">
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.8)'
        }}>
        <View style={styles.pop_up}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
          </View>
          <View>
            <Button
              onPress={onPress}
              Bgcolor={'#2400FF'}
              color={'#EAEAEA'}
              title={button_text}
            />
          </View>
          {text_2 && (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text onPress={onPress1} style={styles.skip}>
                {text_2}
              </Text>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};
