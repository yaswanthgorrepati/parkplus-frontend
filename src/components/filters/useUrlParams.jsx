import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export function useUrlParam(key, defaultValue = "") {
  const [params, setParams] = useSearchParams();
  const value = params.get(key) ?? defaultValue;

  function setValue(v) {
    const next = new URLSearchParams(params);
    if (v === undefined || v === null || v === "") next.delete(key);
    else next.set(key, v);
    setParams(next, { replace: true });
  }

  return [value, setValue];
}

export function useUrlArrayParam(key) {
  const [params, setParams] = useSearchParams();
  const arr = useMemo(() => params.getAll(key), [params, key]);

  function toggle(value) {
    const next = new URLSearchParams(params);
    const items = new Set(next.getAll(key));

    if (items.has(value)) items.delete(value);
    else items.add(value);
    next.delete(key);

    for (const v of items) next.append(key, v);

    setParams(next, { replace: true });
  }

  function clear() {
    const next = new URLSearchParams(params);
    next.delete(key);
    setParams(next, { replace: true });
  }

  return { values: arr, toggle, clear };
}
