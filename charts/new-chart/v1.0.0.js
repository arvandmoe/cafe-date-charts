// base for cafedata charts
// # methods

// change_config_handler()
// transformData(newData: array)
// init_handler()
// resizeHandler({width, height})

//*** vars
// the data of chart
let data;
let backupData;
// the config of chart
let config;
let old_config;

// the col rel of data
let col_rel;

// width, height
let width;
let height;

function onMessage (event) {
  if (!event?.data?.command) {
    return;
  }
  const allowedOrigins = [
    "http://127.0.0.1:5500",
    "http://localhost:5500",
    "http://127.0.0.1:3000",
    "http://localhost:3000",
    "https://cafedata.io",
    "*"
  ];
  if (!allowedOrigins.includes(event.origin)) {
    console.error(`Invalid origin: ${event.origin}`);
    return;
  }
  try {
    const request = event.data;
    switch (request.command) {
      case "first_time":
        base_first_time({
          _col_rel: request?.columns_relation,
          _data: request?.data,
          _config: request?.config
        });
        break;
      case "config_changed":
        base_change_config_handler(request.config);
        break;
      case "columns_relation_changed":
        base_change_col_rel_handler(request.columns_relation);
        break;
      case "data_changed":
        base_change_data_handler(request.data);
        break;
      case "get_state":
        const response = {
          command: "get_state",
          state
        };
        window.parent.postMessage(JSON.stringify(response), event.origin);
        break;
    }
  } catch (error) {
    console.error(`Invalid request: ${error}`);
    return;
  }
}

function main () {
  state = "loaded";
  window.addEventListener("message", onMessage, false);
}

// utils
if (typeof debounce == "undefined") {
  function debounce (func, wait, immediate) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
}
function stringToBoll (_value) {
  if (_value === "true") {
    return true;
  } else {
    return false;
  }
}

// resize
const onWindowResize = () => {
  width = window.innerWidth;
  height = window.innerHeight;
  resizeHandler?.();
};
const onResizeHandler = debounce(onWindowResize, 500);
window.removeEventListener("resize", onResizeHandler);
window.addEventListener("resize", onResizeHandler);

const base_init_chart_handler = async () => {
  await init_handler();
  base_change_config_handler(config);
};

// set col_rel -> set config -> transform data -> set data -> initChart
const base_first_time = async ({ _col_rel, _config, _data }) => {
  width = window.innerWidth;
  height = window.innerHeight;
  col_rel = _col_rel;
  backupData = _data;
  config = _config;
  if (transformData && typeof transformData === "function") {
    data = await transformData?.(_data);
  } else {
    data = _data;
  }
  await base_init_chart_handler();
};

// col rel
const base_change_col_rel_handler = async new_col_rel => {
  col_rel = new_col_rel;
  await col_rel_handler?.();
  if (
    (transformData && typeof transformData === "function" && (Object?.keys(data)?.length) ||
    data.length)
  ) {
    data = await transformData?.(backupData);
  }
  await base_init_chart_handler();
};

// config
const base_change_config_handler = newConfig => {
  old_config = config;
  config = newConfig;
  change_config_handler();
};

// data
const base_change_data_handler = async newData => {
  backupData = newData;
  if (transformData && typeof transformData === "function") {
    data = await transformData?.(newData);
  } else {
    data = newData;
  }
  await base_init_chart_handler();
};

window.onload = main;
