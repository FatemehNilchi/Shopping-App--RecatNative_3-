import {StyleSheet, View, TextInput, Text} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';

const CustomTextInput = props => {
  const {title, IconName, text} = props;

  return (
    <View>
      <Text style={styles.inputTitle}>{title}</Text>
      <View style={styles.inputContainer}>
        <Icons name={IconName} size={24} color={'#A8AAB8'} />
        <TextInput
          style={styles.input}
          placeholder={text}
          placeholderTextColor="#A8AAB8"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    width: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F2F2F2',
    backgroundColor: '#fff',
    marginBottom: 23,
    columnGap: 16,
    paddingHorizontal: 17,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    marginBottom: 12,
  },
  input: {
    width: '100%',
    fontSize: 14,
  },
});

export default CustomTextInput;
