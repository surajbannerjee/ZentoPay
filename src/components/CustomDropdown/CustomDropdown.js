import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { colors } from '../../constants/colors'
import { hp, wp } from '../../constants/constants'
import { fontFamily } from '../../constants/fontConstants'

const CustomDropdown = ({
  data = [],
  value,
  onChange = () => {},
  labelField = 'label',
  valueField = 'value',
  placeholder = '',
  style,
  dropdownStyle,
  selectedTextStyle,
  placeholderStyle,
  maxHeight,
}) => {
  return (
    <Dropdown
      style={[styles.selector, style]}
      data={data}
      labelField={labelField}
      valueField={valueField}
      value={value}
      onChange={onChange}
      renderItem={item => (
        <View style={styles.itemWrap}>
          <Text style={styles.itemText}>{item[labelField]}</Text>
        </View>
      )}
      placeholder={placeholder}
      placeholderStyle={[styles.placeholder, placeholderStyle]}
      selectedTextStyle={[styles.selectedText, selectedTextStyle]}
      dropdownStyle={[styles.dropdown, dropdownStyle]}
      maxHeight={maxHeight || hp(40)}
    />
  )
}

const styles = StyleSheet.create({
  selector: {
    width: '48%',
    height: hp(6),
    backgroundColor: colors.surface,
    borderRadius: 8,
    paddingHorizontal: wp(3),
    borderWidth: 1,
    borderColor: '#444',
    justifyContent: 'center',
  },
  dropdown: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
    paddingVertical: hp(0.5),
  },
  itemWrap: {
    backgroundColor: colors.surface,
  },
  itemText: {
    color: colors.textPrimary,
    fontFamily: fontFamily.regular,
    fontSize: hp(1.4),
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
  },
  placeholder: {
    color: colors.textPrimary,
    fontFamily: fontFamily.regular,
    fontSize: hp(1.4),
  },
  selectedText: {
    color: colors.textPrimary,
    fontFamily: fontFamily.medium,
    fontSize: hp(1.4),
  },
})

export default CustomDropdown
