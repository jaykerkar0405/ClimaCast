// React Hook Imports
import { useEffect, useState } from "react";

// React Native Component Imports
import { View, Text, Linking, Pressable } from "react-native";

// App's External Imports
import { useTheme } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

// App's Internal Imports
import { Footer } from "../../components";
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
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      {package_information.length > 0 &&
        package_information.map((element, index) => {
          return (
            <View style={styles.license} key={index}>
              <Text style={styles.license_title}>{element.name}</Text>

              {element.license_type && (
                <Text style={styles.license_content}>
                  Type: {element.license_type}
                </Text>
              )}

              {element.publisher && (
                <Text style={styles.license_content}>
                  Publisher: {element.publisher}
                </Text>
              )}

              {element.repository && (
                <Text style={styles.license_content}>
                  Repository:{" "}
                  <Pressable
                    onPress={async () => {
                      await Linking.openURL(element.repository);
                    }}
                  >
                    <Text style={styles.external_url}>
                      {element.repository.length <= 37
                        ? element.repository
                        : `${element.repository.slice(0, 34)}...`}
                    </Text>
                  </Pressable>
                </Text>
              )}

              {element.repository && (
                <Text style={styles.license_content}>
                  License:{"   "}
                  <Pressable
                    onPress={async () => {
                      await Linking.openURL(element.license_url);
                    }}
                  >
                    <Text style={styles.external_url}>
                      {element.license_url.length <= 37
                        ? element.license_url
                        : `${element.license_url.slice(0, 34)}...`}
                    </Text>
                  </Pressable>
                </Text>
              )}
            </View>
          );
        })}
      <Footer />
    </ScrollView>
  );
};

export default OpenSourceLicences;
