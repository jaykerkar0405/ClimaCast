// React Native Component Imports
import { View } from "react-native";

// React Hook Imports
import { forwardRef, useCallback, useImperativeHandle } from "react";

// App's External Imports
import Animated, {
  withSpring,
  Extrapolate,
  interpolate,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useTheme } from "@react-navigation/native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

// App's Internal Imports
import { screen_height } from "../../constants";
import get_computed_style from "../../assets/styles/bottom_sheet";

const BottomSheet = forwardRef(({ children }, ref) => {
  const { dark, colors } = useTheme();
  const styles = get_computed_style(colors, dark);

  const active = useSharedValue(false);
  const translate_y = useSharedValue(0);
  const max_translate_y = -screen_height + 50;
  const context = useSharedValue({ translate_y: 0 });

  const scroll_to = useCallback((destination) => {
    "worklet";
    active.value = destination !== 0;
    translate_y.value = withSpring(destination, { damping: 50 });
  }, []);

  const is_active = useCallback(() => {
    return active.value;
  }, []);

  useImperativeHandle(ref, () => ({ scroll_to, is_active }), [
    scroll_to,
    is_active,
  ]);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { translate_y: translate_y.value };
    })
    .onUpdate((event) => {
      translate_y.value = event.translationY + context.value.translate_y;
      translate_y.value = Math.max(translate_y.value, max_translate_y);
    })
    .onEnd(() => {
      if (translate_y.value > -screen_height / 2) {
        scroll_to(0);
      }

      if (translate_y.value < -screen_height / 3) {
        scroll_to(max_translate_y);
      }
    });

  const bottom_sheet_animation = useAnimatedStyle(() => {
    const border_radius = interpolate(
      translate_y.value,
      [max_translate_y + 50, max_translate_y],
      [25, 5],
      Extrapolate.CLAMP
    );

    return {
      border_radius,
      transform: [{ translateY: translate_y.value }],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, bottom_sheet_animation]}>
        <View style={styles.indicator}></View>
        {children}
      </Animated.View>
    </GestureDetector>
  );
});

export default BottomSheet;
