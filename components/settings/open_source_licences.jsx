// React Hook Imports
import { useEffect, useState } from "react";

// React Native Component Imports
import { View, Text, Linking, FlatList, Pressable } from "react-native";

// App's External Imports
import { useTheme } from "@react-navigation/native";

// App's Internal Imports
const licenses = require("../../licenses.json");
import get_computed_style from "../../assets/styles/open_source_licences";

const OpenSourceLicences = () => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);

  const [package_information, set_package_information] = useState([]);
  const [package_name, set_package_name] = useState(Object.keys(licenses));
  const [package_details, set_package_details] = useState(
    Object.values(licenses)
  );

  const license = ({ item }) => {
    return (
      <View style={styles.license}>
        <Text style={styles.license_title}>{item.name}</Text>

        {item.license_type && (
          <Text style={styles.license_content}>Type: {item.license_type}</Text>
        )}

        {item.publisher && (
          <Text style={styles.license_content}>
            Publisher: {item.publisher}
          </Text>
        )}

        {item.repository && (
          <Text style={styles.license_content}>
            Repository:{" "}
            <Pressable
              onPress={async () => {
                await Linking.openURL(item.repository);
              }}
            >
              <Text style={styles.external_url}>
                {item.repository.length <= 37
                  ? item.repository
                  : `${item.repository.slice(0, 34)}...`}
              </Text>
            </Pressable>
          </Text>
        )}

        {item.repository && (
          <Text style={styles.license_content}>
            License:{"   "}
            <Pressable
              onPress={async () => {
                await Linking.openURL(item.license_url);
              }}
            >
              <Text style={styles.external_url}>
                {item.license_url.length <= 37
                  ? item.license_url
                  : `${item.license_url.slice(0, 34)}...`}
              </Text>
            </Pressable>
          </Text>
        )}
      </View>
    );
  };

  useEffect(() => {
    const merged_package = [];

    for (let index = 0; index < package_name.length; index++) {
      const merged_package_information = {
        name: package_name[index],
        publisher: package_details[index].publisher,
        license_type: package_details[index].licenses,
        repository: package_details[index].repository,
        license_url:
          package_details[index].licenseFile &&
          package_details[index].licenseFile.slice(-3) === ".md"
            ? `${package_details[index].repository}/blob/main/LICENSE.md`
            : `${package_details[index].repository}/blob/main/LICENSE`,
      };

      if (merged_package_information) {
        merged_package.push(merged_package_information);
      }
    }

    if (merged_package) {
      set_package_information(merged_package);
    }

    return () => {
      set_package_information([]);
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={license}
        data={package_information}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default OpenSourceLicences;
