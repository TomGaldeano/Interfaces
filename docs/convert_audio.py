from pathlib import Path
import subprocess
import sys

try:
    import imageio_ffmpeg
except ImportError:
    imageio_ffmpeg = None


def main() -> int:
    source = "Patata.m4a"
    destination = "Patata.mp3"

    if imageio_ffmpeg is None:
        print(
            "Error: audio converter package is missing. Install it with: "
            "python -m pip install imageio-ffmpeg",
            file=sys.stderr,
        )
        return 1

    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()

    if not Path(source).is_file():
        print(f"Error: input audio file was not found in the current folder: {source}", file=sys.stderr)
        return 1

    if Path(destination).exists():
        print(f"Error: output already exists; remove it before converting: {destination}", file=sys.stderr)
        return 1

    try:
        subprocess.run(
            [
                ffmpeg,
                "-hide_banner",
                "-loglevel",
                "error",
                "-n",
                "-i",
                str(source),
                "-map",
                "0:a:0",
                "-vn",
                "-codec:a",
                "libmp3lame",
                "-q:a",
                "2",
                str(destination),
            ],
            check=True,
        )
    except subprocess.CalledProcessError as error:
        print(f"Error: ffmpeg failed to convert the audio (exit code {error.returncode}).", file=sys.stderr)
        return error.returncode or 1

    print(f"Created cross-browser MP3: {destination}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
