// React Native Component Imports
import { View, Text, ScrollView } from "react-native";

// App's External Imports
import { useTheme } from "@react-navigation/native";

// App's Internal Imports
import { Footer } from "../../components";
import get_computed_style from "../../assets/styles/release_notes";

const ReleaseNotes = () => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.release_note}>
        <Text style={styles.release_note_version}>Version 1.2.2</Text>
        <Text style={styles.release_note_content}>
          • Resolved critical bugs affecting app stability and performance. 🐛
        </Text>
        <Text style={styles.release_note_content}>
          • Fixed issues related to data synchronization for a smoother user
          experience. 🛠️
        </Text>
        <Text style={styles.release_note_content}>
          • Improved overall app responsiveness and loading times. 🚀
        </Text>
        <Text style={styles.release_note_content}>
          • Enhanced UI elements for better clarity and visual appeal. 🎨
        </Text>
        <Text style={styles.release_note_content}>
          • Addressed minor design inconsistencies for a more polished look. 🛑
        </Text>
        <Text style={styles.release_note_content}>
          • Implemented behind-the-scenes optimizations to optimize resource
          usage. 🚧
        </Text>
        <Text style={styles.release_note_content}>
          • General bug fixes and performance improvements. 🐞
        </Text>
      </View>

      <View style={styles.release_note}>
        <Text style={styles.release_note_version}>Version 1.2.1</Text>
        <Text style={styles.release_note_content}>
          • Integrated advanced error monitoring for real-time issue detection
          🚀
        </Text>
        <Text style={styles.release_note_content}>
          • Fine-tuned app performance, enhancing responsiveness ⚙️
        </Text>
        <Text style={styles.release_note_content}>
          • Proactively addressed bottlenecks for smoother operation 🔄
        </Text>
        <Text style={styles.release_note_content}>
          • Strengthened app stability and user experience 🛡️
        </Text>
        <Text style={styles.release_note_content}>
          • Ensured seamless functionality through proactive monitoring 👁️‍🗨️
        </Text>
        <Text style={styles.release_note_content}>
          • Optimized architecture for improved efficiency 📈
        </Text>
        <Text style={styles.release_note_content}>
          • User-centric approach: Delivering enhanced satisfaction 💡
        </Text>
      </View>

      <View style={styles.release_note}>
        <Text style={styles.release_note_version}>Version 1.2.0</Text>
        <Text style={styles.release_note_content}>
          • Dark Theme: Sleek and stylish for low-light conditions🌒
        </Text>
        <Text style={styles.release_note_content}>
          • Light Theme: Refreshing and vibrant for daytime use 🌞
        </Text>
        <Text style={styles.release_note_content}>
          • Search Screen Crash: Fixed the app crashing issue during searches 🛠️
        </Text>
        <Text style={styles.release_note_content}>
          • Performance: Optimized for smoother navigation and faster loading ⚙️
        </Text>
        <Text style={styles.release_note_content}>
          • UI Refinements: Polished and consistent interface for better user
          experience 🎨
        </Text>
        <Text style={styles.release_note_content}>
          • Accessibility: Enhanced inclusivity and usability for all users ♿
        </Text>
        <Text style={styles.release_note_content}>
          • Privacy and Security: Additional measures to protect your data 🛡️
        </Text>
        <Text style={styles.release_note_content}>
          • Bug Fixes and Stability: Improved app stability and reliability 🐞
        </Text>
      </View>

      <View style={styles.release_note}>
        <Text style={styles.release_note_version}>Version 1.1.1</Text>
        <Text style={styles.release_note_content}>
          • Minor UI enhancements: Improved colors, layout, and icons 🎨
        </Text>
        <Text style={styles.release_note_content}>
          • Bug fixes: Resolved crashes, UI glitches, and font size issues 🐛
        </Text>
        <Text style={styles.release_note_content}>
          • Improved stability: Optimized memory usage, reduced freezes 🏋️
        </Text>
        <Text style={styles.release_note_content}>
          • Major search bug fix: Fixed incorrect search suggestions 🔍
        </Text>
        <Text style={styles.release_note_content}>
          • Updated libraries: Enhanced security and compatibility 🔄
        </Text>
      </View>

      <View style={styles.release_note}>
        <Text style={styles.release_note_version}>Version 1.1.0</Text>
        <Text style={styles.release_note_content}>
          • Fixed bug in deleting favorite locations 🛠️
        </Text>
        <Text style={styles.release_note_content}>
          • Added new feature: Search Suggestion 🆕
        </Text>
        <Text style={styles.release_note_content}>
          • Minor UI enhancement of Home Screen 💫
        </Text>
        <Text style={styles.release_note_content}>
          • Performance improvements for smoother experience 🚀
        </Text>
        <Text style={styles.release_note_content}>
          • Updated backend for better reliability 🔄
        </Text>
      </View>

      <View style={styles.release_note}>
        <Text style={styles.release_note_version}>Version 1.0.1</Text>
        <Text style={styles.release_note_content}>
          • Enhanced Home Screen UI 🎉
        </Text>
        <Text style={styles.release_note_content}>
          • Modified Bottom Tab Bar Design 🎨
        </Text>
        <Text style={styles.release_note_content}>
          • Bug Fixes and Performance Boost 🚀
        </Text>
        <Text style={styles.release_note_content}>
          • Updated Icons and Graphics ✨
        </Text>
        <Text style={styles.release_note_content}>
          • Polished User Interactions 🤝
        </Text>
      </View>

      <View style={styles.release_note}>
        <Text style={styles.release_note_version}>Version 1.0.0</Text>
        <Text style={styles.release_note_content}>• Initial release 🚀</Text>
        <Text style={styles.release_note_content}>
          • Real-time weather updates ⏲️
        </Text>
        <Text style={styles.release_note_content}>
          • Weather forecast feature 🌦️
        </Text>
        <Text style={styles.release_note_content}>
          • Air quality information 🌬️
        </Text>
        <Text style={styles.release_note_content}>
          • Save weather locations 📍
        </Text>
      </View>

      <Footer />
    </ScrollView>
  );
};

export default ReleaseNotes;
