import {useLayoutEffect, useState} from 'react';
import {SearchBarProps} from 'react-native-screens';
import {colors} from '../constants/tokens';
import {useNavigation} from '@react-navigation/native';

const defaultSearchOptions: SearchBarProps = {
  tintColor: colors.primary,
  hideWhenScrolling: false,
};

export const Search = ({
  searchBarOptions,
}: {
  searchBarOptions?: SearchBarProps;
}) => {
  const [search, setSearch] = useState('');

  const navigation = useNavigation();

  const handleOnChangeText: SearchBarProps['onChangeText'] = ({
    nativeEvent: {text},
  }) => {
    setSearch(text);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        ...defaultSearchOptions,
        ...searchBarOptions,
        onChangeText: handleOnChangeText,
      },
    });
  }, [navigation, searchBarOptions]);

  return search;
};
