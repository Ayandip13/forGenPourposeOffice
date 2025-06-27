import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { object, string } from 'yup';
import { Formik } from 'formik';

const Register = () => {

  let userSchema = object({
    name: string().required("Name is required"),
    // age: number().required().positive().integer(),
    email: string().email().required("Email should be valid"),
    password: string().required("Password is required").max(10, "max length should be 10").min(5, "min leangth at least 5 charecter")
  });

  return (
    <View>
      <Formik
        validationSchema={userSchema}
        initialValues={{ email: '', name: '', password: '' }}
        onSubmit={(value, actions) => {
          console.log(value)
          actions.resetForm()
        }}
      >
        {({ handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched
        }) => (
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 250 }}>
            <TextInput
              value={values.name}
              placeholder='Enter Name'
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
            />
            {
              touched.name && errors.name && (<Text style={{ color: 'red' }}>{errors.name}</Text>)
            }
            <TextInput
              value={values.email}
              keyboardType='email-address'
              autoCapitalize='none'
              placeholder='Enter Mail'
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            {
              touched.email && errors.email && (<Text style={{ color: 'red' }}>{errors.email}</Text>)
            }
            <TextInput
              value={values.password}
              secureTextEntry={true}
              autoCapitalize='none'
              placeholder='Enter Password'
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            {
              touched.password && errors.password && (<Text style={{ color: 'red' }}>{errors.password}</Text>)
            }
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={{
                backgroundColor: '#fff',
                height: 50,
                width: 150,
                elevation: 5,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5
              }}>
              <Text>Press here to submit</Text>
            </TouchableOpacity>
          </View>)}
      </Formik>
    </View>
  )
}

export default Register