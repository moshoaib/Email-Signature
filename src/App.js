import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const SignatureGenerator = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: ''
  });
  const [showPreview, setShowPreview] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGenerate = () => {
    setShowPreview(true);
  };

  const handleRegenerate = () => {
    setFormData({
      name: '',
      designation: ''
    });
    setShowPreview(false);
    setCopied(false);
  };

  const getSignatureHTML = () => {
    return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Email Signature</title>
</head>
<body>
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td width="600">
      <table cellspacing="0" cellpadding="0" border="0" style="width: 100%">
        <tr>
          <td width="568" style="background-color: #ffffff; ">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div style="line-height: 10px; height: 10px;">&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td width="100%" style="vertical-align: middle;">
                  <table width="100%" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="vertical-align: middle;">
                        <div style="line-height: normal; text-align: left;">
                          <span style="color: #000000; font-weight: 700; font-family: Karla, Arial, sans-serif; font-size: 20px;">
                            ${formData.name}
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div style="line-height: 2px; height: 2px;">&nbsp;</div>
                      </td>
                    </tr>
                    <tr>
                      <td style="vertical-align: middle;">
                        <div style="line-height: normal; text-align: left;">
                          <span style="color: #000000; font-weight: 500; font-family: Karla, Arial, sans-serif; font-size: 16px; letter-spacing: -0.5px;">
                            ${formData.designation}
                          </span>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <div style="margin-top: 10px;">
              <a href="https://www.echologyx.com" style="color: #000000; text-decoration: underline; font-family: Karla, Arial, sans-serif;">
                www.echologyx.com
              </a>
            </div>
            <div style="margin-top: 10px; display: flex; gap: 16px;">
              <a href="https://maps.app.goo.gl/J5WzxYAKaN4u5ixFA" style="color: #000000; text-decoration: underline; font-family: Karla, Arial, sans-serif; font-size: 12px; font-weight: 700;">London</a>
              <a href="https://maps.app.goo.gl/2PQJL88d6vgfLUyGA" style="color: #000000; text-decoration: underline; font-family: Karla, Arial, sans-serif; font-size: 12px; font-weight: 700;">Miami</a>
              <span style="color: #000000; font-family: Karla, Arial, sans-serif; font-size: 12px; font-weight: 700;">
                Dhaka (<a href="https://maps.app.goo.gl/ZG3AGjC62uqug7JG9" style="text-decoration: underline;">Uttara </a>, 
                <a href="https://maps.app.goo.gl/fMc9tQecnApfQn3u7" style="text-decoration: underline;">Dhanmondi</a>)
              </span>
              <a href="https://maps.app.goo.gl/BA89v6H3G8qyq8xa9" style="color: #000000; text-decoration: underline; font-family: Karla, Arial, sans-serif; font-size: 12px; font-weight: 700;">Chattogram</a>
              <a href="https://maps.app.goo.gl/VhH1odwtXBv3ZUXp9" style="color: #000000; text-decoration: underline; font-family: Karla, Arial, sans-serif; font-size: 12px; font-weight: 700;">Chennai</a>
            </div>
            <div style="margin-top: 10px; font-size: 8px; font-family: Karla, Arial, sans-serif; color: #000000;">
              Disclaimer: This email and any attachments to it may be confidential and are intended solely for the use of the individual to whom it is addressed. Any views or opinions expressed are solely those of the author and do not necessarily represent those of EchoLogyx.<br/>If you are not the intended recipient of this email, you must neither take any action based upon its contents, nor copy or show it to anyone and delete this message immediately. Please contact the sender if you believe you have received this email in error.
            </div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
  };

  const handleCopySignature = async () => {
    try {
      await navigator.clipboard.writeText(getSignatureHTML());
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      alert('Failed to copy signature');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-6">Email Signature Generator</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Designation</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter your designation"
            />
          </div>

          <button
            onClick={handleGenerate}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Generate Signature
          </button>
        </div>
      </div>

      {showPreview && (
        <>     
        <div style={{ backgroundColor: "#f5f5f5" }}>
          <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
            <tbody>
              <tr>
                <td valign="top" align="center">
                  <table
                    bgcolor="#ffffff"
                    style={{ margin: "0 auto" }}
                    align="center"
                    id="brick_container"
                    cellSpacing={0}
                    cellPadding={0}
                    border={0}
                    width="100%"
                    className="email-container"
                  >
                    <tbody>
                      <tr>
                        <td width={600}>
                          <table cellSpacing={0} cellPadding={0} border={0} style={{ width: "100%" }} width={"100%"}>
                            <tbody>
                              <tr>
                                <td
                                  width="100%"
                                  style={{ backgroundColor: "#ffffff" }}
                                  bgcolor="#ffffff"
                                  >
                                  <table
                                    width="100%"
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                    >
                                    <tbody>
                                      <tr>
                                        <td width={600}>
                                          <table                                            
                                            cellSpacing={0}
                                            cellPadding={0}
                                            border={0}
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  width={600}
                                                  style={{
                                                    backgroundColor: "#ffffff",
                                                   
                                                  }}
                                                  bgcolor="#ffffff"
                                                >
                                                  <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <div
                                                            style={{
                                                              lineHeight: 10,
                                                              height: 10,
                                                              fontSize: 10
                                                            }}
                                                          ></div>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td
                                                          width="100%"
                                                          style={{
                                                            verticalAlign: "middle"
                                                          }}
                                                        >
                                                          <table
                                                            width="100%"
                                                            border={0}
                                                            cellPadding={0}
                                                            cellSpacing={0}
                                                          >
                                                            <tbody>
                                                              <tr>
                                                                <td
                                                                  style={{
                                                                    verticalAlign:
                                                                      "middle"
                                                                  }}
                                                                >
                                                                  <div
                                                                    style={{
                                                                      lineHeight:
                                                                        "normal",
                                                                      textAlign: "left"
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          "#000000",
                                                                        fontWeight: 700,
                                                                        fontFamily:
                                                                          "Karla,Arial,sans-serif",
                                                                        fontSize: 20,
                                                                        lineHeight:
                                                                          "normal",
                                                                        textAlign:
                                                                          "left"
                                                                      }}
                                                                    >
                                                                      {formData.name}
                                                                    </span>
                                                                  </div>
                                                                </td>
                                                              </tr>
                                                              <tr>
                                                                <td>
                                                                  <div
                                                                    style={{
                                                                      lineHeight: 2,
                                                                      height: 2,
                                                                      fontSize: 2
                                                                    }}
                                                                  ></div>
                                                                </td>
                                                              </tr>
                                                              <tr>
                                                                <td
                                                                  style={{
                                                                    verticalAlign:
                                                                      "middle"
                                                                  }}
                                                                >
                                                                  <div
                                                                    style={{
                                                                      lineHeight:
                                                                        "normal",
                                                                      textAlign: "left"
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          "#000000",
                                                                        fontWeight: 500,
                                                                        fontFamily:
                                                                          "Karla,Arial,sans-serif",
                                                                        fontSize: 16,
                                                                        letterSpacing:
                                                                          "-0.5px",
                                                                        lineHeight:
                                                                          "normal",
                                                                        textAlign:
                                                                          "left"
                                                                      }}
                                                                    >
                                                                      {formData.designation}
                                                                    </span>
                                                                  </div>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>
                                                          <div
                                                            style={{
                                                              lineHeight: 10,
                                                              height: 10,
                                                              fontSize: 10
                                                            }}
                                                          ></div>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td width={600}>
                                          <img
                                            src="https://plugin.markaimg.com/public/1b6a2727/WKDAgrr9INUNl16xV4PDjfpzTBFnYa.png"
                                            width={600}
                                            border={0}
                                            style={{
                                              width: "100%",
                                              height: "auto",
                                              display: "block"
                                            }}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          width="100%"
                                          
                                        >
                                          <table
                                            width="100%"
                                            border={0}
                                            cellPadding={0}
                                            cellSpacing={0}
                                          >
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <div
                                                    style={{
                                                      lineHeight: 10,
                                                      height: 10,
                                                      fontSize: 10
                                                    }}
                                                  ></div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <table
                                                    cellSpacing={0}
                                                    cellPadding={0}
                                                    border={0}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <table
                                                            width="100%"
                                                            border={0}
                                                            cellPadding={0}
                                                            cellSpacing={0}
                                                          >
                                                            <tbody>
                                                              <tr>
                                                                <td width={20}>
                                                                  <img
                                                                    src="https://plugin.markaimg.com/public/1b6a2727/QPJy4Z3oYKk3o4ANfuxMoi8bmOAFEh.png"
                                                                    width={20}
                                                                    border={0}
                                                                    style={{
                                                                      minWidth: 20,
                                                                      width: 20,
                                                                      height: "auto",
                                                                      display: "block"
                                                                    }}
                                                                  />
                                                                </td>
                                                                <td
                                                                  style={{
                                                                    width: 8,
                                                                    minWidth: 8
                                                                  }}
                                                                  width={8}
                                                                >

                                                                </td>
                                                                <td>
                                                                  <div
                                                                    style={{
                                                                      lineHeight:
                                                                        "normal",
                                                                      textAlign: "left"
                                                                    }}
                                                                  >
                                                                    <a
                                                                      style={{
                                                                        color:
                                                                          "#000000",
                                                                        fontWeight: 500,
                                                                        fontFamily:
                                                                          "Karla,Arial,sans-serif",
                                                                        fontSize: 16,
                                                                        lineHeight:
                                                                          "normal",
                                                                        textAlign:
                                                                          "left",
                                                                        textDecoration:
                                                                          "underline"
                                                                      }}
                                                                      href="https://www.echologyx.com" target="_blank"
                                                                    >
                                                                      <span>
                                                                        www.echologyx.com
                                                                      </span>
                                                                    </a>
                                                                  </div>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div
                                                    style={{
                                                      lineHeight: 17,
                                                      height: 17,
                                                      fontSize: 17
                                                    }}
                                                  ></div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  width="100%"
                                                  style={{ verticalAlign: "middle" }}
                                                >
                                                  <table
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          style={{
                                                            verticalAlign: "middle"
                                                          }}
                                                        >
                                                          <table
                                                            cellSpacing={0}
                                                            cellPadding={0}
                                                            border={0}
                                                          >
                                                            <tbody>
                                                              <tr>
                                                                <td
                                                                  style={{
                                                                    verticalAlign:
                                                                      "middle"
                                                                  }}
                                                                >
                                                                  <table
                                                                    width="100%"
                                                                    border={0}
                                                                    cellPadding={0}
                                                                    cellSpacing={0}
                                                                  >
                                                                    <tbody>
                                                                      <tr>
                                                                        <td
                                                                          style={{
                                                                            verticalAlign:
                                                                              "middle"
                                                                          }}
                                                                          width={18}
                                                                        >
                                                                          <img
                                                                            src="https://plugin.markaimg.com/public/1b6a2727/20ngeJUZVWjIGzH2gWAyRQ9zxyQRMv.png"
                                                                            width={18}
                                                                            border={0}
                                                                            style={{
                                                                              minWidth: 18,
                                                                              width: 18,
                                                                              height:
                                                                                "auto",
                                                                              display:
                                                                                "block"
                                                                            }}
                                                                          />
                                                                        </td>
                                                                        <td
                                                                          style={{
                                                                            width: 2,
                                                                            minWidth: 2
                                                                          }}
                                                                          width={2}
                                                                        ></td>
                                                                        <td
                                                                          style={{
                                                                            verticalAlign:
                                                                              "middle"
                                                                          }}
                                                                        >
                                                                          <div
                                                                            style={{
                                                                              lineHeight:
                                                                                "normal",
                                                                              textAlign:
                                                                                "left"
                                                                            }}
                                                                          >
                                                                            <a
                                                                              style={{
                                                                                color:
                                                                                  "#000000",
                                                                                fontWeight: 700,
                                                                                fontFamily:
                                                                                  "Karla,Arial,sans-serif",
                                                                                fontSize: 12,
                                                                                lineHeight:
                                                                                  "normal",
                                                                                textAlign:
                                                                                  "left",
                                                                                textDecoration:
                                                                                  "underline"
                                                                              }}
                                                                              href="https://maps.app.goo.gl/J5WzxYAKaN4u5ixFA" target="_blank"
                                                                            >
                                                                              <span>
                                                                                London
                                                                              </span>
                                                                            </a>
                                                                          </div>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                        <td
                                                          style={{
                                                            width: 16,
                                                            minWidth: 16
                                                          }}
                                                          width={16}
                                                        >

                                                        </td>
                                                        <td
                                                          style={{
                                                            verticalAlign: "middle"
                                                          }}
                                                        >
                                                          <table
                                                            cellSpacing={0}
                                                            cellPadding={0}
                                                            border={0}
                                                          >
                                                            <tbody>
                                                              <tr>
                                                                <td
                                                                  style={{
                                                                    verticalAlign:
                                                                      "middle"
                                                                  }}
                                                                >
                                                                  <table
                                                                    width="100%"
                                                                    border={0}
                                                                    cellPadding={0}
                                                                    cellSpacing={0}
                                                                  >
                                                                    <tbody>
                                                                      <tr>
                                                                        <td
                                                                          style={{
                                                                            verticalAlign:
                                                                              "middle"
                                                                          }}
                                                                          width={20}
                                                                        >
                                                                          <img
                                                                            src="https://plugin.markaimg.com/public/1b6a2727/dfwl1X2tkmebU9Ifnsqc3sKPkpjS0o.png"
                                                                            width={20}
                                                                            border={0}
                                                                            style={{
                                                                              minWidth: 20,
                                                                              width: 20,
                                                                              height:
                                                                                "auto",
                                                                              display:
                                                                                "block"
                                                                            }}
                                                                          />
                                                                        </td>
                                                                        <td
                                                                          style={{
                                                                            width: 2,
                                                                            minWidth: 2
                                                                          }}
                                                                          width={2}
                                                                        ></td>
                                                                        <td
                                                                          style={{
                                                                            verticalAlign:
                                                                              "middle"
                                                                          }}
                                                                        >
                                                                          <div
                                                                            style={{
                                                                              lineHeight:
                                                                                "normal",
                                                                              textAlign:
                                                                                "left"
                                                                            }}
                                                                          >
                                                                            <a
                                                                              style={{
                                                                                color:
                                                                                  "#000000",
                                                                                fontWeight: 700,
                                                                                fontFamily:
                                                                                  "Karla,Arial,sans-serif",
                                                                                fontSize: 12,
                                                                                lineHeight:
                                                                                  "normal",
                                                                                textAlign:
                                                                                  "left",
                                                                                textDecoration:
                                                                                  "underline"
                                                                              }}
                                                                              href="https://maps.app.goo.gl/2PQJL88d6vgfLUyGA" target="_blank"
                                                                            >
                                                                              <span>
                                                                                Miami
                                                                              </span>
                                                                            </a>
                                                                          </div>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                        <td
                                                          style={{
                                                            width: 16,
                                                            minWidth: 16
                                                          }}
                                                          width={16}
                                                        >

                                                        </td>
                                                        <td
                                                          style={{
                                                            verticalAlign: "middle"
                                                          }}
                                                        >
                                                          <table
                                                            cellSpacing={0}
                                                            cellPadding={0}
                                                            border={0}
                                                          >
                                                            <tbody>
                                                              <tr>
                                                                <td
                                                                  style={{
                                                                    verticalAlign:
                                                                      "middle"
                                                                  }}
                                                                >
                                                                  <table
                                                                    width="100%"
                                                                    border={0}
                                                                    cellPadding={0}
                                                                    cellSpacing={0}
                                                                  >
                                                                    <tbody>
                                                                      <tr>
                                                                        <td
                                                                          style={{
                                                                            verticalAlign:
                                                                              "middle"
                                                                          }}
                                                                          width={20}
                                                                        >
                                                                          <img
                                                                            src="https://plugin.markaimg.com/public/1b6a2727/uI42WGdnMbhl2903mq1J8PBK0BK0WT.png"
                                                                            width={20}
                                                                            border={0}
                                                                            style={{
                                                                              minWidth: 20,
                                                                              width: 20,
                                                                              height:
                                                                                "auto",
                                                                              display:
                                                                                "block"
                                                                            }}
                                                                          />
                                                                        </td>
                                                                        <td
                                                                          style={{
                                                                            width: 2,
                                                                            minWidth: 2
                                                                          }}
                                                                          width={2}
                                                                        ></td>
                                                                        <td
                                                                          style={{
                                                                            verticalAlign:
                                                                              "middle"
                                                                          }}
                                                                        >
                                                                          <div
                                                                            style={{
                                                                              lineHeight:
                                                                                "normal",
                                                                              textAlign:
                                                                                "left"
                                                                            }}
                                                                          >
                                                                            <span
                                                                              style={{
                                                                                color:
                                                                                  "#000000",
                                                                                fontWeight: 700,
                                                                                fontFamily:
                                                                                  "Karla,Arial,sans-serif",
                                                                                fontSize: 12,
                                                                                lineHeight:
                                                                                  "normal",
                                                                                textAlign:
                                                                                  "left"
                                                                              }}
                                                                            >
                                                                              Dhaka (
                                                                            </span>
                                                                            <a
                                                                              style={{
                                                                                color:
                                                                                  "#000000",
                                                                                fontWeight: 700,
                                                                                fontFamily:
                                                                                  "Karla,Arial,sans-serif",
                                                                                fontSize: 12,
                                                                                lineHeight:
                                                                                  "normal",
                                                                                textAlign:
                                                                                  "left",
                                                                                textDecoration:
                                                                                  "underline"
                                                                              }}
                                                                              href="https://maps.app.goo.gl/ZG3AGjC62uqug7JG9" target="_blank"
                                                                            >
                                                                              <span>
                                                                                Uttara
                                                                              </span>
                                                                            </a>
                                                                            <span
                                                                              style={{
                                                                                color:
                                                                                  "#000000",
                                                                                fontWeight: 700,
                                                                                fontFamily:
                                                                                  "Karla,Arial,sans-serif",
                                                                                fontSize: 12,
                                                                                lineHeight:
                                                                                  "normal",
                                                                                textAlign:
                                                                                  "left",
                                                                                textDecoration:
                                                                                  "underline"
                                                                              }}
                                                                            >
                                                                            </span>
                                                                             {", "}
                                                                            <a
                                                                              style={{
                                                                                color:
                                                                                  "#000000",
                                                                                fontWeight: 700,
                                                                                fontFamily:
                                                                                  "Karla,Arial,sans-serif",
                                                                                fontSize: 12,
                                                                                lineHeight:
                                                                                  "normal",
                                                                                textAlign:
                                                                                  "left",
                                                                                textDecoration:
                                                                                  "underline"
                                                                              }}
                                                                              href="https://maps.app.goo.gl/fMc9tQecnApfQn3u7" target="_blank"
                                                                            >
                                                                              <span>
                                                                                Dhanmondi
                                                                              </span>
                                                                            </a>
                                                                            <span
                                                                              style={{
                                                                                color:
                                                                                  "#000000",
                                                                                fontWeight: 700,
                                                                                fontFamily:
                                                                                  "Karla,Arial,sans-serif",
                                                                                fontSize: 12,
                                                                                lineHeight:
                                                                                  "normal",
                                                                                textAlign:
                                                                                  "left"
                                                                              }}
                                                                            >
                                                                              )
                                                                            </span>
                                                                          </div>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                        <td
                                                          style={{
                                                            width: 16,
                                                            minWidth: 16
                                                          }}
                                                          width={16}
                                                        >

                                                        </td>
                                                        <td
                                                          style={{
                                                            verticalAlign: "middle"
                                                          }}
                                                        >
                                                          <table
                                                            cellSpacing={0}
                                                            cellPadding={0}
                                                            border={0}
                                                          >
                                                            <tbody>
                                                              <tr>
                                                                <td
                                                                  style={{
                                                                    verticalAlign:
                                                                      "middle"
                                                                  }}
                                                                >
                                                                  <table
                                                                    width="100%"
                                                                    border={0}
                                                                    cellPadding={0}
                                                                    cellSpacing={0}
                                                                  >
                                                                    <tbody>
                                                                      <tr>
                                                                        <td
                                                                          style={{
                                                                            verticalAlign:
                                                                              "middle"
                                                                          }}
                                                                          width={20}
                                                                        >
                                                                          <img
                                                                            src="https://plugin.markaimg.com/public/1b6a2727/r8ELzv9kxYApXMSZ8Flh81nvU1T3yW.png"
                                                                            width={20}
                                                                            border={0}
                                                                            style={{
                                                                              minWidth: 20,
                                                                              width: 20,
                                                                              height:
                                                                                "auto",
                                                                              display:
                                                                                "block"
                                                                            }}
                                                                          />
                                                                        </td>
                                                                        <td
                                                                          style={{
                                                                            width: 2,
                                                                            minWidth: 2
                                                                          }}
                                                                          width={2}
                                                                        ></td>
                                                                        <td
                                                                          style={{
                                                                            verticalAlign:
                                                                              "middle"
                                                                          }}
                                                                        >
                                                                          <div
                                                                            style={{
                                                                              lineHeight:
                                                                                "normal",
                                                                              textAlign:
                                                                                "left"
                                                                            }}
                                                                          >
                                                                            <a
                                                                              style={{
                                                                                color:
                                                                                  "#000000",
                                                                                fontWeight: 700,
                                                                                fontFamily:
                                                                                  "Karla,Arial,sans-serif",
                                                                                fontSize: 12,
                                                                                lineHeight:
                                                                                  "normal",
                                                                                textAlign:
                                                                                  "left",
                                                                                textDecoration:
                                                                                  "underline"
                                                                              }}
                                                                              href="https://maps.app.goo.gl/BA89v6H3G8qyq8xa9" target="_blank"
                                                                            >
                                                                              <span>
                                                                                Chattogram
                                                                              </span>
                                                                            </a>
                                                                          </div>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                        <td
                                                          style={{
                                                            width: 16,
                                                            minWidth: 16
                                                          }}
                                                          width={16}
                                                        >

                                                        </td>
                                                        <td
                                                          style={{
                                                            verticalAlign: "middle"
                                                          }}
                                                        >
                                                          <table
                                                            cellSpacing={0}
                                                            cellPadding={0}
                                                            border={0}
                                                          >
                                                            <tbody>
                                                              <tr>
                                                                <td
                                                                  style={{
                                                                    verticalAlign:
                                                                      "middle"
                                                                  }}
                                                                >
                                                                  <table
                                                                    width="100%"
                                                                    border={0}
                                                                    cellPadding={0}
                                                                    cellSpacing={0}
                                                                  >
                                                                    <tbody>
                                                                      <tr>
                                                                        <td
                                                                          style={{
                                                                            verticalAlign:
                                                                              "middle"
                                                                          }}
                                                                          width={20}
                                                                        >
                                                                          <img
                                                                            src="https://plugin.markaimg.com/public/1b6a2727/KTUfSC0B0Wc3UNHdHyJAT8EO4OUYB1.png"
                                                                            width={20}
                                                                            border={0}
                                                                            style={{
                                                                              minWidth: 20,
                                                                              width: 20,
                                                                              height:
                                                                                "auto",
                                                                              display:
                                                                                "block"
                                                                            }}
                                                                          />
                                                                        </td>
                                                                        <td
                                                                          style={{
                                                                            width: 2,
                                                                            minWidth: 2
                                                                          }}
                                                                          width={2}
                                                                        ></td>
                                                                        <td
                                                                          style={{
                                                                            verticalAlign:
                                                                              "middle"
                                                                          }}
                                                                        >
                                                                          <div
                                                                            style={{
                                                                              lineHeight:
                                                                                "normal",
                                                                              textAlign:
                                                                                "left"
                                                                            }}
                                                                          >
                                                                            <a
                                                                              style={{
                                                                                color:
                                                                                  "#000000",
                                                                                fontWeight: 700,
                                                                                fontFamily:
                                                                                  "Karla,Arial,sans-serif",
                                                                                fontSize: 12,
                                                                                lineHeight:
                                                                                  "normal",
                                                                                textAlign:
                                                                                  "left",
                                                                                textDecoration:
                                                                                  "underline"
                                                                              }}
                                                                              href="https://maps.app.goo.gl/VhH1odwtXBv3ZUXp9" target="_blank"
                                                                            >
                                                                              <span>
                                                                                Chennai
                                                                              </span>
                                                                            </a>
                                                                          </div>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div
                                                    style={{
                                                      lineHeight: 17,
                                                      height: 17,
                                                      fontSize: 17
                                                    }}
                                                  ></div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div
                                                    style={{
                                                      lineHeight: "normal",
                                                      textAlign: "left"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        color: "#000000",
                                                        fontFamily:
                                                          "Karla,Arial,sans-serif",
                                                        fontSize: 8,
                                                        lineHeight: "normal",
                                                        textAlign: "left"
                                                      }}
                                                    >
                                                      Disclaimer: This email and any
                                                      attachments to it may be
                                                      confidential and are intended
                                                      solely for the use of the
                                                      individual to whom it is
                                                      addressed. Any views or opinions
                                                      expressed are solely those of the
                                                      author and do not necessarily
                                                      represent those of EchoLogyx.
                                                      <br />
                                                      If you are not the intended
                                                      recipient of this email, you must
                                                      neither take any action based upon
                                                      its contents, nor copy or show it
                                                      to anyone and delete this message
                                                      immediately. Please contact the
                                                      sender if you believe you have
                                                      received this email in error.
                                                    </span>
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div
                                                    style={{
                                                      lineHeight: 24,
                                                      height: 24,
                                                      fontSize: 24
                                                    }}
                                                  ></div>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex gap-4">
            {/* <button
              onClick={handleCopySignature}
              className={`flex-1 py-2 rounded-md flex items-center justify-center gap-2 transition-colors ${
                copied ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
              } text-white`}
            >
              {copied ? (
                <>
                  <Check size={16} /> Copied!
                </>
              ) : (
                <>
                  <Copy size={16} /> Copy Signature
                </>
              )}
            </button> */}

            <button
              onClick={handleRegenerate}
              className="flex-1 bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700"
            >
              Regenerate
            </button>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default SignatureGenerator;