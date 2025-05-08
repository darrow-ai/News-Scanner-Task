import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

interface QueryInputProps {
  onChange?: any;
  value?: string;
}

export const QueryInput = ({ onChange, value = "" }: QueryInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={"query-input"}>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="query-input-label">
          <div style={{ color: "white" }}>{"Search Term"}</div>
        </InputLabel>
        <OutlinedInput
          style={{ color: "white" }}
          className="query-input"
          value={value}
          onChange={handleChange}
          placeholder={"What to search for?"}
          label={"Search"}
        />
      </FormControl>
    </div>
  );
};
