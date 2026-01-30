let _listener = null;

export function onToast(fn) {
  _listener = fn;
}

export function showToast(message, type = 'success') {
  if (_listener) _listener({ message, type, id: Date.now() });
}
