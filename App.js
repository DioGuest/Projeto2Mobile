
import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [theme, setTheme] = useState('Claro');
  const [fontSize, setFontSize] = useState(16);
  const [isNightMode, setIsNightMode] = useState(false);

  const resetPreferences = () => {
    setTheme('Claro');
    setFontSize(16);
    setIsNightMode(false);
  };

  // Definindo as cores com base no tema
  let backgroundColor;
  let textColor;

  switch (theme) {
    case 'Claro':
      backgroundColor = '#fff';
      textColor = '#000';
      break;
    case 'Escuro':
      backgroundColor = '#333';
      textColor = '#fff';
      break;
    case 'Automático':
      backgroundColor = isNightMode ? '#333' : '#fff';
      textColor = isNightMode ? '#fff' : '#000';
      break;
    default:
      backgroundColor = '#fff';
      textColor = '#000';
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { fontSize, color: textColor }]}>
        Configurações de Preferências
      </Text>
      
      <Text style={[styles.label, { fontSize, color: textColor }]}>Tema:</Text>
      <Picker
        selectedValue={theme}
        style={styles.picker}
        onValueChange={(itemValue) => setTheme(itemValue)}
      >
        <Picker.Item label="Claro" value="Claro" />
        <Picker.Item label="Escuro" value="Escuro" />
        <Picker.Item label="Automático" value="Automático" />
      </Picker>

      <Text style={[styles.label, { fontSize, color: textColor }]}>
        Tamanho da Fonte: {fontSize}
      </Text>
      <Slider
        minimumValue={12}
        maximumValue={30}
        value={fontSize}
        onValueChange={(value) => setFontSize(value)}
        step={1}
        style={styles.slider}
      />

      <Text style={[styles.label, { fontSize, color: textColor }]}>
        Modo Noturno: {isNightMode ? 'Ativado' : 'Desativado'}
      </Text>
      <Switch
        value={isNightMode}
        onValueChange={() => setIsNightMode(previousState => !previousState)}
      />

      <TouchableOpacity style={styles.button} onPress={resetPreferences}>
        <Text style={styles.buttonText}>Resetar Preferências</Text>
      </TouchableOpacity>

      {/* Texto de exemplo para visualizar a alteração do tamanho da fonte */}
      <Text style={{ fontSize, color: textColor }}>Exemplo de Texto</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: 90,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginTop: 20,
  },
  picker: {
    height: 50,
    width: 150,
    marginTop: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  button: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#FF8C00',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});




