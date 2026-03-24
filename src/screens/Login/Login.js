import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { X } from 'lucide-react-native'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/reducers/authReducer'
import { Styles } from './Style'
import { hp, wp } from '../../constants/constants'
import { colors } from '../../constants/colors'
import { FormInput } from '@react-native-utils/forminput'
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown'

const TABS = ['Phone', 'Security', 'Verifying', 'Choose account']

const Login = () => {
  const dispatch = useDispatch()
  const [current, setCurrent] = useState(0)

  const [phone, setPhone] = useState('')
  const [usePin, setUsePin] = useState(false)

  const LANGS = [
    { label: 'English (United States)', value: 'en' },
    { label: 'Hindi (India)', value: 'hi' },
  ]

  const COUNTRIES = [
    { label: 'India (+91)', value: '+91', flag: '🇮🇳' },
    { label: 'United States (+1)', value: '+1', flag: '🇺🇸' },
    { label: 'United Kingdom (+44)', value: '+44', flag: '🇬🇧' },
  ]

  const [selectedLang, setSelectedLang] = useState(LANGS[0].value)
  const [selectedCountryCode, setSelectedCountryCode] = useState(COUNTRIES[0].value)
  const [selectedCountryFlag, setSelectedCountryFlag] = useState(COUNTRIES[0].flag)

  const handleLogin = () => {
    dispatch(
      login({
        user: { name: 'Suraj', phone },
        token: '123456',
      })
    )
  }

  const renderTabBar = () => (
    <View style={Styles.tabBar}>
      {TABS.map((t, i) => (
        <TouchableOpacity
          key={t}
          style={[Styles.tabItem, current === i && Styles.tabItemActive]}
          onPress={() => setCurrent(i)}
        >
          <Text style={[Styles.tabText, current === i && Styles.tabTextActive]}>
            {t}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )

  const renderContent = () => {
    switch (current) {
      case 0:
        return (
          <View>
            <View style={Styles.topBarRow}>
              <CustomDropdown
                data={LANGS}
                value={selectedLang}
                onChange={item => setSelectedLang(item.value)}
                placeholder="Language"
                placeholderStyle={Styles.dropdownPlaceholder}
                selectedTextStyle={Styles.dropdownSelected}
                dropdownStyle={Styles.dropdownStyle}
                style={Styles.dropdownSelector}
                maxHeight={hp(40)}
              />

              <CustomDropdown
                data={COUNTRIES.map(c => ({ ...c, label: `${c.flag} ${c.label}` }))}
                value={selectedCountryCode}
                onChange={item => { setSelectedCountryCode(item.value); const found = COUNTRIES.find(c => c.value === item.value); setSelectedCountryFlag(found?.flag || ''); }}
                placeholder="Country"
                placeholderStyle={Styles.dropdownPlaceholder}
                selectedTextStyle={Styles.dropdownSelected}
                dropdownStyle={Styles.dropdownStyle}
                style={Styles.dropdownSelector}
                maxHeight={hp(40)}
              />
            </View>

            

            <Text style={Styles.sectionTitle}>Welcome to ZentoPay1</Text>
            <Text style={Styles.subtitle}>Enter phone number linked to your bank account</Text>

            <View style={{ height: hp(6) }} />

            <View style={Styles.inputRow}>
              <View style={Styles.countryPrefix}>
                <Text style={Styles.countryFlag}>{selectedCountryFlag}</Text>
                <Text style={Styles.countryCodePrefix}>{selectedCountryCode}</Text>
              </View>
              <FormInput
                text={{
                  labelText: '',
                  placeholderText: '00000 00000',
                  value: phone,
                  characterLimit: 20,
                }}
                core={{
                  onTextChange: (text) => setPhone(text),
                }}
                icon={{
                  leftIconContainerStyle: Styles.leftIconContainer,
                }}
                style={{
                  isRequired: true,
                  inputContainerStyle: Styles.formInputContainer,
                  inputContainerBackgroundColor: colors.surface,
                  inputStyle: Styles.phoneInputInner,
                }}
                componentProps={{
                  textInputProps: {
                    style: Styles.phoneInputInner,
                    keyboardType: 'phone-pad',
                    placeholderTextColor: colors.platinum,
                  },
                }}
              />
            </View>

            {phone.trim().length > 0 ? (
              <TouchableOpacity
                style={[Styles.button, { marginTop: hp(4) }]}
                onPress={() => setCurrent(1)}
              >
                <Text style={Styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        )

      case 1:
        return (
          <View>
            <Text style={Styles.sectionTitle}>Secure ZentoPay</Text>
            <TouchableOpacity
              style={Styles.optionRow}
              onPress={() => setUsePin(false)}
            >
              <View style={Styles.radio}>{!usePin && <View style={Styles.radioDot} />}</View>
              <View style={{ flex: 1 }}>
                <Text style={Styles.optionTitle}>Use your screen lock</Text>
                <Text style={Styles.optionSubtitle}>Protect ZentoPay by using your existing phone screen lock</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={Styles.optionRow}
              onPress={() => setUsePin(true)}
            >
              <View style={Styles.radio}>{usePin && <View style={Styles.radioDot} />}</View>
              <View style={{ flex: 1 }}>
                <Text style={Styles.optionTitle}>Use Zento PIN</Text>
                <Text style={Styles.optionSubtitle}>Use a 4-digit PIN to secure your account</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={Styles.button}
              onPress={() => setCurrent(2)}
            >
              <Text style={Styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        )

      case 2:
        return (
          <View style={Styles.centered}>
            <Text style={Styles.verifyingText}>Verifying{'.'.repeat(3)}</Text>
            <TouchableOpacity
              style={[Styles.button, { marginTop: 20 }]}
              onPress={() => setCurrent(3)}
            >
              <Text style={Styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        )

      case 3:
        return (
          <View>
            <Text style={Styles.sectionTitle}>Choose an account</Text>
            <FlatList
              data={[{ id: '1', name: 'Technical Suraj', phone: phone || '+91 00000 00000' }]}
              keyExtractor={(i) => i.id}
              renderItem={({ item }) => (
                <View style={Styles.accountRow}>
                  <View style={Styles.avatar} />
                  <View style={{ flex: 1 }}>
                    <Text style={Styles.optionTitle}>{item.name}</Text>
                    <Text style={Styles.optionSubtitle}>{item.phone}</Text>
                  </View>
                </View>
              )}
            />

            <TouchableOpacity style={Styles.button} onPress={handleLogin}>
              <Text style={Styles.buttonText}>Accept & continue</Text>
            </TouchableOpacity>
          </View>
        )

      default:
        return null
    }
  }

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>ZentoPay</Text>
      <Text style={Styles.stepText}>Step {current + 1} of {TABS.length}</Text>
      <View style={Styles.content}>{renderContent()}</View>
    </View>
  )
}

export default Login