import os
import re

REPLACEMENTS = [
    # Emojis & Titles from Mojibake
    ('dY"<', '💻'),
    ('dY"O', '📋'),
    ('dY">', '📜'),
    ('dY",', '📷'),
    ('dYZT', '🎯'),
    ('dYZ_', '💼'),
    ('dYO?', '🌐'),
    ('dYs?', '⚙️'),
    ('dY"?>', '❓'),
    ('dY?>', '❓'),
    ('dY"?', '📍'),
    ('dY>', '🛠️'),
    ("dY'", '💡'),
    ("dY'?", '🚀'),
    ("dY'", '🚀'),
    ('dY', '✅'),
    
    # Dashes, bullets, and quotes
    ('?"', '—'),
    ('?', '•'),
    ('•', '•'),
    ('s', '⚡'),
    ('•?', '•'),
    ('?', '•'),
]

LEARNING_REPLACEMENTS = [
    ('# ?? Learning Projects', '# 🚀 Learning Projects'),
    ('## ??? Lab Index', '## 📋 Lab Index'),
    ('## ?? Learning Objectives', '## 🎯 Learning Objectives'),
    ('### ?? Networking', '### 🌐 Networking'),
    ('### ?? Systems & Administration', '### 🖥️ Systems & Administration'),
    ('### ?? Systems', '### 🖥️ Systems'),
    ('### ?? Monitoring & Operations', '### 📊 Monitoring & Operations'),
    ('### ?? Monitoring', '### 📊 Monitoring'),
    ('## ?? Lab Overview', '## 📖 Lab Overview'),
    ('## ?? Network Topology', '## 🗺️ Network Topology'),
    ('## ?? Prerequisites', '## 📦 Prerequisites'),
    ('## ?? Implementation Steps', '## 🛠️ Implementation Steps'),
    ('## ?? Verification & Testing', '## ✅ Verification & Testing'),
    ('## ?? Troubleshooting Scenarios', '## 🔍 Troubleshooting Scenarios'),
    ('## ?? Key Takeaways & UAE Market Value', '## 💼 Key Takeaways & UAE Market Value'),
    ('## ?? Key Takeaways', '## 💼 Key Takeaways'),
    ('### ?? Verification', '### ✅ Verification'),
    ('?? ', '• '),
    (' ', '• '),
    ('\ufffd', '•'),
]

TARGET_DIRS = [
    '01_Master_Profile',
    '02_Resume',
    '03_Cover_Letter',
    '05_GitHub',
    '06_LinkedIn',
    '07_Projects',
    '12_Interview',
    'Learning_Projects',
]

def clean_file(filepath):
    with open(filepath, 'rb') as f:
        raw = f.read()
    
    # Try decoding utf-8
    text = raw.decode('utf-8', errors='replace')
    orig = text
    
    # Apply standard mojibake replacements
    for bad, good in REPLACEMENTS:
        text = text.replace(bad, good)
        
    # Apply learning replacements if in Learning_Projects
    if 'Learning_Projects' in filepath:
        for bad, good in LEARNING_REPLACEMENTS:
            text = text.replace(bad, good)
    
    # General cleanup of any lingering replacement chars
    text = re.sub(r'•\s*•', '•', text)
    
    if text != orig:
        with open(filepath, 'w', encoding='utf-8', newline='\n') as f:
            f.write(text)
        print(f"Fixed: {filepath}")
        return True
    return False

def main():
    root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
    fixed_count = 0
    
    # Check README and charter
    for f in ['README.md', '00_Project_Charter.md']:
        p = os.path.join(root, f)
        if os.path.exists(p) and clean_file(p):
            fixed_count += 1
            
    for td in TARGET_DIRS:
        dp = os.path.join(root, td)
        if not os.path.exists(dp):
            continue
        for r, dirs, files in os.walk(dp):
            for fn in files:
                if fn.endswith(('.md', '.py', '.txt', '.json')):
                    fp = os.path.join(r, fn)
                    if clean_file(fp):
                        fixed_count += 1

    print(f"\nTotal files cleaned: {fixed_count}")

if __name__ == '__main__':
    main()
