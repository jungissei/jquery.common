

// ----------------------------------------------------------------------------
// Common functions
// ----------------------------------------------------------------------------

function is_touch_display() {
  return window.ontouchstart !== undefined
    && 0 < navigator.maxTouchPoints;
};
