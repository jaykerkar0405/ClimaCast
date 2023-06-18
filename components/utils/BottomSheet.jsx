// React Native Component Imports
import { View, Dimensions } from "react-native";

// React Hook Imports
import { useCallback, forwardRef, useImperativeHandle } from "react";

// App's External Imports
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

// App's Internal Imports
import styles from "../../assets/styles/bottom_sheet";

const BottomSheet = forwardRef(({ children }, ref) => {
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");
  const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

  const translateY = useSharedValue(0);
  const context = useSharedValue({ translateY: 0 });
  const active = useSharedValue(false);

  const scroll_to = useCallback((destination) => {
    "worklet";
    active.value = destination !== 0;
    translateY.value = withSpring(destination, { damping: 50 });
  });

  const is_active = useCallback(() => {
    return active.value;
  }, []);

  useImperativeHandle(ref, () => ({ scroll_to, is_active }), [
    scroll_to,
    is_active,
  ]);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { translateY: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.translateY;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 2) {
        scroll_to(0);
      } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
        scroll_to(MAX_TRANSLATE_Y);
      }
    });

  const reanimated_style = useAnimatedStyle(() => {
    const border_radius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP
    );

    return {
      border_radius,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, reanimated_style]}>
        <View style={styles.indicator}></View>
        {children}
      </Animated.View>
    </GestureDetector>
  );
});

export default BottomSheet;
